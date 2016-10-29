import FormQuestionController from './form-question.controller';

export default function CsvExportDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/form-question/form-question.html',
        controller: FormQuestionController,
        controllerAs: 'fqCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            question: '=ngModel',
        }
    };

    return directive;
}
