import categoryTemplate from './category.html';

class CategoryController {

    get gridStyle() {
        return {
            display: 'grid',
            'grid-template-columns': this.createGridSizeString(this.numOfColumns),
            'grid-template-rows': this.createGridSizeString(this.numOfRows),
        };
    }

    constructor() {
        this.numOfRows = 0;
        this.numOfColumns = 0;
    }

    $onInit() {
        this.sortQuestionsIntoColumns();
    }

    sortQuestionsIntoColumns() {
        let questions = this.category.questions.map(x => {x.type = "question"; return x;});
        let prompts = this.category.prompts.map(x => {x.type = "prompt"; return x;});
        let questionsAndPrompts = questions.concat(prompts);
        questionsAndPrompts.sort(this.sortByLayout);
        let columns = questionsAndPrompts.reduce(this.reduceArray, []);
        this.setupGrid(columns);
        this.questions = columns.reduce((agg, arr) => {
            return agg.concat(arr);
        }, []);
    }

    setupGrid(columns) {
        this.numOfColumns = columns.length;
        this.numOfRows = columns.map(x => x.length).reduce((a,b) => Math.max(a,b));
        let offset = columns.length * 2 - 1;
        let dict = columns[columns.length-1].reduce((agg, c) => {
            let selfId = c.layout.split('.').join('');
            if(!(selfId in agg)) {
                agg[selfId] = 1;
            }
            return agg;
        }, {});
        this.setupGridItems(columns, columns.length-1, offset, dict);

    }

    setupGridItems(columns, index, offset, dict) {
        if(index < 0) { return;}
        let column = columns[index];
        let row = 1;
        column.forEach(item => {
            let selfId = item.layout.substring(0, offset+2).split('.').join('');
            let rowSpan = dict[selfId];
            let gridInfo = {
                column: index+1,
                rowSpan,
                row,
            };
            row+=rowSpan;
            item.style = {
                'grid-column': `${gridInfo.column} / span 1`,
                'grid-row': `${gridInfo.row} / span ${gridInfo.rowSpan}`,
            };
        });
        let newDict = {}
        for(let k in dict) {
            let val = dict[k];
            let nk = k.substring(0, k.length-1);
            if(!(nk in newDict)) {
                newDict[nk] = 0;
            }
            newDict[nk]+=val;
        }
        this.setupGridItems(columns, index-1, offset-2, newDict);
    }

    sortByLayout(foo, bar) {
        let layout1 = parseInt(foo.layout.split('.').join(''));
        let layout2 = parseInt(bar.layout.split('.').join(''));
        return layout1 - layout2;
    }

    reduceArray(aggregate, item) {
        let index = item.layout.split('.').join('').length - 2;
        while(aggregate.length <= index) {
            aggregate.push([]);
        }
        aggregate[index].push(item);
        return aggregate;
    }

    createGridSizeString(num) {
        let s = '';
        for(let i = 0; i < num; i++) {
            s = s.concat('1fr ');
        }
        return s;
    }

}

export default {
    templateUrl: categoryTemplate,
    bindings: {
        category: '<'
    },
    controller: CategoryController
};