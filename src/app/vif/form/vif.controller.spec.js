import VifController from './vif.controller';

describe('VifController', () => {
   
    let controller, mockState, mockStateParams, mockVifService, mockVifBuilder;
   
    beforeEach(inject(($q) => {
        mockState = {
            go: function (state) {},
            current: {
                data: {
                    index: 0
                }
            }
        };
        spyOn(mockState, 'go');
        mockStateParams = {id: 'create'};
        mockVifService = jasmine.createSpyObj('VifService', ['get', 'create', 'update', 'delete']);
        mockVifService.get.and.callFake((id) => {
            return $q.when({id: id});
        })
        mockVifBuilder = jasmine.createSpyObj('VifBuilder', ['build']);        
        controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
    }));
    
    describe('constructor', () => {
       describe('when $stateParams.id equals "create"', () => {
           it('should not get VIF', () => {
               expect(mockVifService.get).not.toHaveBeenCalled();
           });
       }); 
       
       describe('when $stateParams.id is a VIF id', () => {
           it('should get VIF with id', () => {
               let id = 1
               mockStateParams.id = id;
               
               controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
               
               expect(mockVifService.get).toHaveBeenCalledWith(id);               
           });
       });
    });
   
    describe('goToSection', () => {
        it('when index < 0 should set sectionIndex to 0', () => {
            let index = -1;
          
            controller.goToSection(index);
          
            expect(controller.sectionIndex).toEqual(0);
        }); 
      
        it('when index >= controller.sections.length should set sectionIndex to controller.sections.length - 1', () => {
            let index = 1000;
          
            controller.goToSection(index);
          
            expect(controller.sectionIndex).toEqual(controller.sections.length - 1);
        }); 
      
        describe('when index in valid range', () => {
            let index = 1;
          
            it('should set sectionIndex', () => {
                controller.goToSection(index);
              
                expect(controller.sectionIndex).toEqual(index);
            });
          
            it('should change state to corresponding section', () => {
                controller.goToSection(index);
              
                expect(mockState.go).toHaveBeenCalledWith(controller.sections[index].state);
            });
        });
    });
   
    describe('nextSection', () => {
        describe('when not on last page', () => {
            let index = 4;
            beforeEach(() => {
                 
                 mockState = {
                    go: function (state) {},
                    current: {
                        data: {
                            index: index
                        }
                    }
                };
                spyOn(mockState, 'go');
                controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
            })
                      
            it('should increase sectionIndex by 1', () => {
                controller.nextSection();
              
                expect(controller.sectionIndex).toEqual(index + 1);
            });
          
            it('should change state to corresponding section', () => {
                controller.nextSection();
              
                expect(mockState.go).toHaveBeenCalledWith(controller.sections[index + 1].state);
            });
        });
        
        describe('when on last page', () => {
            let index = 10;
            beforeEach(() => {
                 mockState = {
                    go: function (state) {},
                    current: {
                        data: {
                            index: index
                        }
                    }
                };
                spyOn(mockState, 'go');
                controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
            })
                      
            it('should not increase sectionIndex by 1', () => {
                controller.nextSection();
              
                expect(controller.sectionIndex).toEqual(index);
            });
          
            it('should change state to corresponding section', () => {
                controller.nextSection();
              
                expect(mockState.go).not.toHaveBeenCalled();
            });
        });       
    });
    
    describe('prevSection', () => {
        describe('when not on first page', () => {
            let index = 4;
            beforeEach(() => {
                 
                 mockState = {
                    go: function (state) {},
                    current: {
                        data: {
                            index: index
                        }
                    }
                };
                spyOn(mockState, 'go');
                controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
            })
                      
            it('should descrease sectionIndex by 1', () => {
                controller.prevSection();
              
                expect(controller.sectionIndex).toEqual(index - 1);
            });
          
            it('should change state to corresponding section', () => {
                controller.prevSection();
              
                expect(mockState.go).toHaveBeenCalledWith(controller.sections[index - 1].state);
            });
        });
        
        describe('when on first page', () => {
            let index = 0;
            beforeEach(() => {
                 mockState = {
                    go: function (state) {},
                    current: {
                        data: {
                            index: index
                        }
                    }
                };
                spyOn(mockState, 'go');
                controller = new VifController(mockState, mockStateParams, mockVifService, mockVifBuilder);
            })
                      
            it('should not increase sectionIndex by 1', () => {
                controller.prevSection();
              
                expect(controller.sectionIndex).toEqual(index);
            });
          
            it('should change state to corresponding section', () => {
                controller.prevSection();
              
                expect(mockState.go).not.toHaveBeenCalled();
            });
        });
    })
});