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
        this._yes = vif.attitude_towards_tiny_hands_thankful;
        this._no = vif.attitude_towards_tiny_hands_blames;
        this._doesntKnow = vif.attitude_towards_tiny_hands_doesnt_know;
    }

    build(vif) {
        vif.attitude_towards_tiny_hands_thankful = this._yes;
        vif.attitude_towards_tiny_hands_blames = this._no;
        vif.attitude_towards_tiny_hands_doesnt_know = this._doesntKnow;
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