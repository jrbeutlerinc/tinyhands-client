export default class NumberQuestionController {
    constructor() {
        'ngInject';
    }

    getStep() {
        return this.integerOnly() ? '1' : 'any';
    }
}