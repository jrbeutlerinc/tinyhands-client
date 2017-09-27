import categoryTemplate from './category.html';
import GridLayoutHelper from '../../util/gridLayoutHelper';

class CategoryController {

    get gridStyle() {
        return this.gridLayout.style;
    }

    get questions() {
        return this.gridLayout.items;
    }

    constructor() {
        this.numOfRows = 0;
        this.numOfColumns = 0;
        this.gridLayout = new GridLayoutHelper(x => x.layout);
    }

    $onInit() {
        this.sortQuestionsIntoColumns();
    }

    sortQuestionsIntoColumns() {
        let questions = this.category.questions.map(x => {x.type = "question"; return x;});
        let prompts = this.category.prompts.map(x => {x.type = "prompt"; return x;});
        let questionsAndPrompts = questions.concat(prompts);
        this.gridLayout.setItems(questionsAndPrompts);
    }
}

export default {
    templateUrl: categoryTemplate,
    bindings: {
        category: '<'
    },
    controller: CategoryController
};