import categoryTemplate from './category.html';
import GridLayoutHelper from '../../util/gridLayoutHelper';

class CategoryController {

    get gridStyle() {
        return this.gridLayout.style;
    }

    get questions() {
        return this._items;
    }

    constructor() {
        this._items = [];
        this.gridLayout = new GridLayoutHelper(x => x.layout);
    }

    $onInit() {
        this.setupGrid();
    }

    setupGrid() {
        let questions = this.category.questions.map(x => {x.type = "question"; return x;});
        let prompts = this.category.prompts.map(x => {x.type = "prompt"; return x;});
        let questionsAndPrompts = questions.concat(prompts);
        this.gridLayout.setupLookupTree(questionsAndPrompts, this.category.category_id);
        this._items = questionsAndPrompts;
    }

    getQuestionStyle(question) {
        return this.gridLayout.getStyle(question);
    }
}

export default {
    templateUrl: categoryTemplate,
    bindings: {
        category: '<'
    },
    controller: CategoryController
};