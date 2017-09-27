export default class GridLayoutHelper {

    constructor(keyFunc) {
        this.getKey = keyFunc;
    }

    get style() {
        return {
            display: 'grid',
            'grid-template-columns': this.createGridSizeString(this.numOfColumns),
            'grid-template-rows': this.createGridSizeString(this.numOfRows),
        };
    }

    setItems(items) {
        this.items = items;
        items.sort(this.sortByLayout.bind(this));
        let columns = items.reduce(this.reduceIntoColumns.bind(this),[]);
        this.setupGrid(columns);
    }

    sortByLayout(item1, item2) {
        let layout1 = parseInt(this.getKey(item1).split('.').join(''));
        let layout2 = parseInt(this.getKey(item2).split('.').join(''));
        return layout1 - layout2;
    }

    reduceIntoColumns(columns, item) {
        let index = this.getKey(item).split('.').join('').length - 2;
        while(columns.length <= index) {
            columns.push([]);
        }
        columns[index].push(item);
        return columns;
    }

    setupGrid(columns) {
        this.numOfColumns = columns.length;
        this.numOfRows = columns.map(x => x.length).reduce((a,b) => Math.max(a,b));
        let offset = columns.length * 2 - 1;
        let idToSizeDict = columns[columns.length-1].reduce((agg, c) => {
            let selfId = this.getKey(c).split('.').join('');
            if(!(selfId in agg)) {
                agg[selfId] = 1;
            }
            return agg;
        }, {});
        this.setupGridItems(columns, columns.length-1, offset, idToSizeDict);
    }

    setupGridItems(columns, index, offset, dict) {
        if(index < 0) { return;}
        let column = columns[index];
        let row = 1;
        column.forEach(item => {
            let selfId = this.getKey(item).substring(0, offset+2).split('.').join('');
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
                border: "black solid 1px"
            };
        });
        let newDict = {}
        for(let key in dict) {
            let val = dict[key];
            let newKey = key.substring(0, key.length-1);
            if(!(newKey in newDict)) {
                newDict[newKey] = 0;
            }
            newDict[newKey]+=val;
        }
        this.setupGridItems(columns, index-1, offset-2, newDict);
    }

    createGridSizeString(num) {
        let s = '';
        for(let i = 0; i < num; i++) {
            s = s.concat('1fr ');
        }
        return s;
    }

}