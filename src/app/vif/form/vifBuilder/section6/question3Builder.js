export default class Question3Builder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._neverHeard = false;
        this._nameOnly = false;
        this._neverBelieved = false;
        this._alreadyBeliever = false;
    }

    setValues(vif) {
        this._neverHeard = vif.victim_heard_gospel_no;
        this._nameOnly = vif.victim_heard_gospel_heard_name_only;
        this._neverBelieved = vif.victim_heard_gospel_heard_but_never_believed;
        this._alreadyBeliever = vif.victim_heard_gospel_already_believer;
    }

    build(vif) {
        vif.victim_heard_gospel_no = this._neverHeard;
        vif.victim_heard_gospel_heard_name_only = this._nameOnly;
        vif.victim_heard_gospel_heard_but_never_believed = this._neverBelieved;
        vif.victim_heard_gospel_already_believer = this._alreadyBeliever;
    }

    get neverHeard() {
        return this._neverHeard;
    }

    set neverHeard(value) {
        this.clearAll();
        this._neverHeard = value;
    }

    get nameOnly() {
        return this._nameOnly;
    }

    set nameOnly(value) {
        this.clearAll();
        this._nameOnly = value;
    }

    get neverBelieved() {
        return this._neverBelieved;
    }

    set neverBelieved(value) {
        this.clearAll();
        this._neverBelieved = value;
    }

    get alreadyBeliever() {
        return this._alreadyBeliever;
    }

    set alreadyBeliever(value) {
        this.clearAll();
        this._alreadyBeliever = value;
    }
}