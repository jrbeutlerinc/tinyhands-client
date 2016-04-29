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
        this._hadHeard = vif.awareness_before_interception_had_heard_not_how_bad;
        this._knewHowBad = vif.awareness_before_interception_knew_how_bad_not_happening_to_her;
        this._neverHeard = vif.awareness_before_interception_never_heard;
    }

    build(vif) {
        vif.awareness_before_interception_had_heard_not_how_bad = this._hadHeard;
        vif.awareness_before_interception_knew_how_bad_not_happening_to_her = this._knewHowBad;
        vif.awareness_before_interception_never_heard = this._neverHeard;
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