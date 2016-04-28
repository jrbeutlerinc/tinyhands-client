export default class FreeToGoOutBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._explainText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._yes = false;
        this._no = false;
    }

    setValues(vif) {
        if (vif.victim_was_free_to_go_out) {
            this._yes = true;
            this._no = false;
        } else {
            this._yes = false;
            this._no = true;
        }
    }

    build(vif) {
        vif.victim_was_free_to_go_out = this._yes;
        vif.victim_was_free_to_go_out_explanation = this._explainText;
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
}