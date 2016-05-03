export default class Question2Builder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._yes = false;
        this._no = false;
        this._doesntKnow = false;
    }

    setValues(vif) {
        this._yes = vif.question_2_yes;
        this._no = vif.question_2_no;
        this._doesntKnow = vif.question_2_doesnt_know;
    }

    build(vif) {
        vif.question_2_yes = this._yes;
        vif.question_2_no = this._no;
        vif.question_2_doesnt_know = this._doesntKnow;
    }

    get yes() {
        return this._yes;
    }

    set yes(value) {
        this.clearAll();
        this._yes = value;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this.clearAll();
        this._no = value;
    }

    get doesntKnow() {
        return this._doesntKnow;
    }

    set doesntKnow(value) {
        this.clearAll();
        this._doesntKnow = value;
    }
}