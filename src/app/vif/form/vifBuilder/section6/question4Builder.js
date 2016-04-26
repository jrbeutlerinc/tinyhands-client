export default class Question4Builder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._doesntBelieve = false;
        this._believesButNoChurch = false;
        this._believesAndChurch = false;
    }

    setValues(vif) {
        this._doesntBelieve = vif.question_4_doesnt_believe;
        this._believesButNoChurch = vif.question_4_believes_but_no_church;
        this._believesAndChurch = vif.question_4_believes_and_church;
    }

    build(vif) {
        vif.question_4_doesnt_believe = this._doesntBelieve;
        vif.question_4_believes_but_no_church = this._believesButNoChurch;
        vif.question_4_believes_and_church = this._believesAndChurch;
    }

    get doesntBelieve() {
        return this._doesntBelieve;
    }

    set doesntBelieve(value) {
        this.clearAll();
        this._doesntBelieve = value;
    }

    get believesButNoChurch() {
        return this._believesButNoChurch;
    }

    set believesButNoChurch(value) {
        this.clearAll();
        this._believesButNoChurch = value;
    }

    get believesAndChurch() {
        return this._believesAndChurch;
    }

    set believesAndChurch(value) {
        this.clearAll();
        this._believesAndChurch = value;
    }
}