export default class GridLayoutHelper {

    constructor(keyFunc) {
        this.getKey = keyFunc;
        this.startingRow = 1;
        this.startingColumn = 0;
    }

    get style() {
        return {
            display: 'grid',
            'grid-template-columns': GridLayoutHelper.createGridSizeString(this.numberOfColumns),
            'grid-template-rows': GridLayoutHelper.createGridSizeString(this.numberOfRows),
        };
    }

    setupLookupTree(items, categoryId) {
        let copy = items.slice().map(this.getKey);
        let sortedItems = copy.sort(GridLayoutHelper.sortKeys);
        let levels = this.sliceArray(sortedItems);
        this.tree = this.createTree(levels, categoryId);
    }

    static sortKeys(item1, item2) {
        let key1 = item1.split(".");
        let key2 = item2.split(".");

        if(key1.length !== key2.length) {
            return key1.length - key2.length;
        }

        for(let i = 0; i < key1.length; i++) {
            let x = parseInt(key1[1]);
            let y = parseInt(key2[i]);
            if(x !== y) {
                return x - y;
            }
        }
        return 0;
    }

    sliceArray(sortedArray) {
        let slicedArray = [];
        let startingIndex = 0;
        let currentLevel = 1;
        sortedArray.forEach((item, index) => {
            let level = item.split(".").length;
            if(level > currentLevel) {
                slicedArray.push(sortedArray.slice(startingIndex, index));
                startingIndex = index;
                currentLevel++;
            }
        });
        slicedArray.push(sortedArray.slice(startingIndex, sortedArray.length));
        return slicedArray;
    }

    createTree(levelsArray, categoryId) {
        let rootNode = new TreeNode(categoryId);
        levelsArray.forEach((level) => {
            level.forEach((question) => {
                let address = question.split(".");
                let ancestors = address.slice(1, address.length-1);
                let id = address[address.length - 1];
                let node = rootNode;
                ancestors.forEach((ancestorId) => {
                    node = node.getChild(ancestorId);
                });
                node.addChild(id);
            });
        });

        rootNode.calculate(this.startingRow, this.startingColumn);
        this.numberOfRows = rootNode.weight;
        this.numberOfColumns = levelsArray.length-1;
        return rootNode;
    }

    static createGridSizeString(num) {
        let s = '';
        for(let i = 0; i < num; i++) {
            s = s.concat('1fr ');
        }
        return s;
    }

    getStyle(item) {
        let address = this.getKey(item).split(".");
        let node = this.tree;
        for(let i = 1; i < address.length; i++) {
            let id = address[i];
            node = node.getChild(id);
        }
        return node.style;
    }
}

class TreeNode {

    get weight() {
        return this._weight;
    }

    get column() {
        return this._column;
    }

    get row() {
        return this._row;
    }

    get style() {
        return {
            'grid-column': `${this.column} / span 1`,
            'grid-row': `${this.row} / span ${this.weight}`,
            border: "black solid 1px"
        };
    }

    constructor(id) {
        this.id = id;
        this.children = {};
        this._weight = -1;
        this._row = -1;
        this._column = -1;
    }

    addChild(id) {
        this.children[id] = new TreeNode(id);
    }

    getChild(id) {
        return this.children[id];
    }

    calculate(row, column) {
        if(this.weight !== -1) {
            return this.weight;
        }
        this._row = row;
        this._column = column;
        if(Object.keys(this.children).length === 0) {
            this._weight = 1;
        } else {
            let keys = Object.keys(this.children);
            let weight = 0;
            let childRow = row;
            keys.forEach((key) => {
                let w = this.children[key].calculate(childRow, column+1);
                weight += w;
                childRow += w;
            });
            this._weight = weight;
        }
        return this.weight;
    }
}