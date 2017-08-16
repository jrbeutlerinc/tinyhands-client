import formTemplate from './irfForm.html';

class FormController {
    constructor() {

    }
}

export default {
    templateUrl: formTemplate,
    bindings: {
        text: '@'
    },
    controller: FormController,
};