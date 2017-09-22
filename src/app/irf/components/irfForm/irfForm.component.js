import formTemplate from './irfForm.html';

class FormController {
    constructor(IrfService) {
        'ngInject';
        this.irfService = IrfService;

        this.irfService.getForm().then((data) => {
            this.form = data;
        });
    }
}

export default {
    templateUrl: formTemplate,
    bindings: {
        text: '@'
    },
    controller: FormController,
};