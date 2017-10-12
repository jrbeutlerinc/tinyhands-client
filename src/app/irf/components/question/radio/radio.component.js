import radioTemplate from './radio.html';


class RadioController {

    get name() {
        return this.question.layout;
    }

    get displayText() {
        return this.question.display_text;
    }

    get options() {
        return this._options;
    }

    constructor() {
        this._options = [];
    }

    $onInit(){
        this._options = this.question.options.map(x => {
            let value = Object.keys(x)[0];
            return {
                value: value,
                text: x[value]
            };
        });
    }
}

export default {
    templateUrl: radioTemplate,
    controller: RadioController,
    bindings: {
        question: '<',
    }
}