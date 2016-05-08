export default class InterviewerBelieveBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._manyGirls = false;
        this._someGirls = false;
        this._suspect = false;
        this._dontBelieve = false;
    }

    setValues(vif) {
        this._manyGirls = vif.persons.interviewer_believes_definitely_trafficked;
        this._someGirls = vif.persons.interviewer_believes_have_trafficked;
        this._suspect = vif.persons.interviewer_believes_suspects_trafficked;
        this._dontBelieve = vif.persons.interviewer_believes_not_trafficker;
    }

    build(vif = {}) {
        vif.persons.interviewer_believes_definitely_trafficked = this._manyGirls;
        vif.persons.interviewer_believes_have_trafficked = this._someGirls;
        vif.persons.interviewer_believes_suspects_trafficked = this._suspect;
        vif.persons.interviewer_believes_not_trafficker = this._dontBelieve;
        return vif;
    }

    get manyGirls() {
        return this._manyGirls;
    }

    set manyGirls(value) {
        this.clearAll();
        this._manyGirls = value;
    }

    get someGirls() {
        return this._someGirls;
    }

    set someGirls(value) {
        this.clearAll();
        this._someGirls = value;
    }

    get suspect() {
        return this._suspect;
    }

    set suspect(value) {
        this.clearAll();
        this._suspect = value;
    }

    get dontBelieve() {
        return this._dontBelieve;
    }

    set dontBelieve(value) {
        this.clearAll();
        this._dontBelieve = value;
    }
}