import TextboxQuestionController from './textbox-question.controller';

export default function TextboxQuestionDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/question-types/textbox-question/textbox-question.html',
        controller: TextboxQuestionController,
        controllerAs: 'tbCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            question: '=ngModel',
        }
    };

    return directive;
}