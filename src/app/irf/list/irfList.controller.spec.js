import IrfListController from './irfList.controller';

describe('IRF List Controller',() => {
    let vm,
        $timeout,
        $window,
        MockIrfListService,
        MockSessionService,
        MockStickyHeader,
        $stateParams,
        queryParameters,
        transformedQueryParameters;

    beforeEach(inject((_$timeout_, _$window_) => {
        $timeout = _$timeout_;
        $window = _$window_;
        $stateParams = {"search": "BHD"};

        MockStickyHeader = jasmine.createSpyObj('StickyHeader', ['stickyOptions']);

        MockIrfListService = jasmine.createSpyObj('IrfListService', [
            'getIrfList',
            'getMoreIrfs',
            'deleteIrf',
            'irfExists'
        ]);

        let response = {'data':{
                        "count": 0,
                        "results": [],
                        "next": "",
                        "previous": ""}
        };

        MockIrfListService.getIrfList.and.callFake( () => {
            return {
                then: (f) => {
                    f(response);
                }
            };
        });

        MockIrfListService.irfExists.and.callFake( () => {
            return {
                then: (f) => {
                    f({data: "BHD123"});
                }
            };
        });

        vm = new IrfListController(MockIrfListService, MockSessionService, MockStickyHeader, $stateParams, $timeout, $window, {}, {BaseUrl: "asdf"});
    }));

    describe('function constructor', () => {
        it('expect the search parameter to be set', () => {
            expect(vm.queryParameters.search).toBe("BHD");
        });

        it('expect the search parameter to be set', () => {
            $stateParams = {};
            vm = new IrfListController(MockIrfListService, MockSessionService, MockStickyHeader, $stateParams, $timeout, $window, {}, {BaseUrl: "asdf"});
            expect(vm.queryParameters.search).not.toBe(null);
        });

        it('expect checkForExistingIrfs to be called', () => {
            spyOn(vm, 'checkForExistingIrfs');
            vm.constructor(MockIrfListService, MockSessionService, $stateParams, $timeout, $window, {}, {BaseUrl: "asdf"});
            expect(vm.checkForExistingIrfs).toHaveBeenCalled();
        });
    });

    describe('function transform', () => {
        beforeEach(inject(() => {
            queryParameters = {
                "page_size": 50,
                "reverse": true,
                "ordering": 'irf_num',
                "search": 'BHD'
            };

            transformedQueryParameters = [
                {"name": "page_size", "value": 50},
                {"name": "ordering", "value": "-irf_num"},
                {"name": "search", "value": "BHD"}
            ];
        }));

        it('expect it to create an array of key value pairs for the parameters', () => {
            var val = vm.transform(queryParameters);
            expect(angular.equals(val, transformedQueryParameters)).toBe(true);
        });

        it('expect the reverse field to not be included', () => {
            queryParameters.reverse = false;
            var val = vm.transform(queryParameters);
            val.forEach( (obj) => {
                expect(obj.name).not.toEqual('reverse');
            });
        });

        it('expect the ordering field to have a "-" before the name', () => {
            var val = vm.transform(queryParameters);
            expect(val[1].value.slice(0,1)).toBe('-');
        });

        it('expect the ordering field to not have a "-" before the name', () => {
            queryParameters.reverse = false;
            var val = vm.transform(queryParameters);
            expect(val[1].value.slice(0,1)).not.toEqual('-');
        });
    });

    describe('function extractPage', () => {
        it('expect it to extract the page number so it can load the next page', () => {
            var val = vm.extractPage('http://tinyhandsdreamsuite.org/api/irf/?page=6&ordering=irf_number');
            expect(val).toBe('6');
        });
        it('When a null is passed in, expect to return 0', () => {
            var val = vm.extractPage(null);
            expect(val).toBe(0);
        });
    });

    describe('function getSortIcon', () => {
        it('expect it to return false when column is equal, but not reverse is not true', () => {
            var val = vm.getSortIcon('date_time_of_interception', '!reverse');
            expect(val).toBe(false);
        });

        it('expect it to return true when column is equal and reverse is true', () => {
            var val = vm.getSortIcon('date_time_of_interception', 'reverse');
            expect(val).toBe(true);
        });

        it('expect it to return false when column is not equal, but not reverse is true', () => {
            var val = vm.getSortIcon('ate_time_of_interception', 'reverse');
            expect(val).toBe(false);
        });

        it('expect it to return false when column is not equal, but not reverse is true', () => {
            var val = vm.getSortIcon('rf_number', '!reverse');
            expect(val).toBe(false);
        });
    });

    describe('function updateSort', () => {
        it('expect it to flip the reverse bool when column is equal to the parameter', () => {
            vm.queryParameters.ordering = 'irf_number';
            vm.queryParameters.reverse = false;

            vm.updateSort('irf_number');
            expect(vm.queryParameters.reverse).toBe(true);
            expect(vm.queryParameters.ordering).toBe('irf_number');
        });

        it('expect it to flip the reverse bool when column is equal to the parameter', () => {
            vm.queryParameters.ordering = 'irf_number';
            vm.queryParameters.reverse = true;

            vm.updateSort('irf_number');
            expect(vm.queryParameters.reverse).toBe(false);
            expect(vm.queryParameters.ordering).toBe('irf_number');
        });

        it('expect it to not flip the reverse bool when column is not equal to the parameter and expect it to change the ordering parameter', () => {
            vm.queryParameters.ordering = 'irf_number';
            vm.queryParameters.reverse = true;

            vm.updateSort('rf_number');
            expect(vm.queryParameters.reverse).toBe(true);
            expect(vm.queryParameters.ordering).toBe('rf_number');
        });

        it('expect it to not flip the reverse bool when column is not equal to the parameter and expect it to change the ordering parameter', () => {
            vm.queryParameters.ordering = 'irf_number';
            vm.queryParameters.reverse = false;

            vm.updateSort('rf_number');
            expect(vm.queryParameters.reverse).toBe(false);
            expect(vm.queryParameters.ordering).toBe('rf_number');
        });
    });

    describe('function checkForExistingIrfs', () => {
        let savedIrfs;
        beforeEach(() => {
            savedIrfs = {
                BHD123: {asdf: "asdf"},
                BHD1234: {asdf: "asdf"}
            }
            localStorage.setItem('saved-irfs', JSON.stringify(savedIrfs));
        });

        it('should return undefined if no saved-irfs', () => {
            localStorage.removeItem('saved-irfs');
            var result = vm.checkForExistingIrfs();

            expect(result).toEqual(undefined);
        });

        it('should call irfExists on each form in savedIrfs', () => {
            var result = vm.checkForExistingIrfs();

            expect(vm.service.irfExists).toHaveBeenCalledWith('BHD123');
            expect(vm.service.irfExists).toHaveBeenCalledWith('BHD1234');
        });

        it('should call removeIrfFromSaveForLater on response with same name', () => {
            spyOn(vm, 'removeIrfFromSaveForLater');

            var result = vm.checkForExistingIrfs();

            expect(vm.removeIrfFromSaveForLater).toHaveBeenCalledWith('BHD123');
            expect(vm.removeIrfFromSaveForLater).not.toHaveBeenCalledWith('BHD1234');
        });
    });

    describe('function removeIrfFromSaveForLater', () => {
        let savedIrfs;
        beforeEach(() => {
            savedIrfs = {
                BHD123: {asdf: "asdf"},
                BHD1234: {asdf: "asdf"}
            }
            localStorage.setItem('saved-irfs', JSON.stringify(savedIrfs));
        });

        it('Should remove object with passed in parameter from local storage', () => {
            expect(savedIrfs).toEqual(JSON.parse(localStorage.getItem('saved-irfs')));

            vm.removeIrfFromSaveForLater('BHD123');

            expect(savedIrfs).not.toEqual(JSON.parse(localStorage.getItem('saved-irfs')));
        });
    });
});
