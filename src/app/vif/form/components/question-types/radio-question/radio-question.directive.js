import RadioQuestionController from './radio-question.controller';

export default function RadioQuestionDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/question-types/radio-question/radio-question.html',
        controller: RadioQuestionController,
        controllerAs: 'radioCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            question: '=ngModel',
        }
    };

    return directive;
}