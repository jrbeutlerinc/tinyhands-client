export default class NumberQuestionController {
    constructor() {
        'ngInject';
    }

    getStep() {
        return this.integerOnly() ? '1' : 'any';
    }

    getPattern() {
        return this.integerOnly() ? '^[0-9]+$' : '^[0-9]+(?:\\.[0-9]+)?$';
    }
}