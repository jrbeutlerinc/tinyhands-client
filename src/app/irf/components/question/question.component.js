import questionTemplate from './question.html';

class QuestionController {
    constructor() {

    }
}

export default {
    templateUrl: questionTemplate,
    bindings: {
        text: '@'
    },
    controller: QuestionController
};