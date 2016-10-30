import NumberQuestionController from './number-question.controller';

export default function NumberQuestionDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/question-types/number-question/number-question.html',
        controller: NumberQuestionController,
        controllerAs: 'numCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            question: '=ngModel',
            integerOnly: '&'
        }
    };

    return directive;
}