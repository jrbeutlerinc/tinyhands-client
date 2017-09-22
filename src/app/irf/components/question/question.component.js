import questionTemplate from './question.html';

class QuestionController {
    constructor() {

    }
}

export default {
    templateUrl: questionTemplate,
    bindings: {
        question: '<'
    },
    controller: QuestionController
};