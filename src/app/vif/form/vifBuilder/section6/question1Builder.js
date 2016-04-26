export default class Question1Builder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._hadHeard = false;
        this._knewHowBad = false;
        this._neverHeard = false;
    }

    setValues(vif) {
        this._hadHeard = vif.question_1_had_heard;
        this._knewHowBad = vif.question_1_knew_how_bad;
        this._neverHeard = vif.question_1_never_heard;
    }

    build(vif) {
        vif.question_1_had_heard = this._hadHeard;
        vif.question_1_knew_how_bad = this._knewHowBad;
        vif.question_1_never_heard = this._neverHeard;
    }

    get hadHeard() {
        return this._hadHeard;
    }

    set hadHeard(value) {
        this.clearAll();
        this._hadHeard = value;
    }

    get knewHowBad() {
        return this._knewHowBad;
    }

    set knewHowBad(value) {
        this.clearAll();
        this._knewHowBad = value;
    }

    get neverHeard() {
        return this._neverHeard;
    }

    set neverHeard(value) {
        this.clearAll();
        this._neverHeard = value;
    }
}