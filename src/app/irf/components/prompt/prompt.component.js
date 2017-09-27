import template from "./prompt.html";

class PromptController {

    get gridNumber() {
        return this.prompt.layout;
    }

    get text() {
        return this.prompt.display_text;
    }
}

export default {
    templateUrl: template,
    bindings: {
        prompt: "<"
    },
    controller: PromptController
};