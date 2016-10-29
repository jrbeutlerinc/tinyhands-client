import FormSectionController from './form-section.controller';

export default function CsvExportDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/form-section/form-section.html',
        controller: FormSectionController,
        controllerAs: 'fsCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            section: '=ngModel',
        }
    };

    return directive;
}
