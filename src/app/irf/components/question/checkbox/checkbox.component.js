import template from './checkbox.html';

class CheckboxController {

    get id() {
        return this.question.id;
    }

    get text() {
        return this.question.display_text;
    }

}

export default {
    templateUrl: template,
    bindings: {
        question: '<'
    },
    controller: CheckboxController
}