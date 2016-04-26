export default class MeetAgainInIndiaBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._whereText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._yes = false;
        this._no = false;
    }

    setValues(vif) {
        this._yes = vif.hide_presence_yes;
        this._no = vif.hide_presence_no;
    }

    build(vif) {
        vif.meet_again_in_india_yes = this._yes;
        vif.meet_again_in_india_no = this._no;
        vif.meet_again_in_india_where_value = this._whereText;
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