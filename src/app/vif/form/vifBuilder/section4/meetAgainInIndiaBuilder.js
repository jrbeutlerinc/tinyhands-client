export default class MeetAgainInIndiaBuilder {
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
    }

    setValues(vif) {
        if (vif.planning_to_meet_companion_later) {
            this._yes = true;
            this._no = false;
        } else {
            this._yes = false;
            this._no = true;
        }
    }

    build(vif) {
        vif.planning_to_meet_companion_later = this._yes;
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