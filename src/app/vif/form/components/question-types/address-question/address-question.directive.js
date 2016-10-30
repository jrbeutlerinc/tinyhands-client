import AddressQuestionController from './address-question.controller';

export default function AddressQuestionDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/vif/form/components/question-types/address-question/address-question.html',
        controller: AddressQuestionController,
        controllerAs: 'addressCtrl',
        require: ['ngModel'],
        bindToController: true,
        scope: {
            question: '=ngModel',
        }
    };

    return directive;
}
