export default class AlcoholBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._never = false;
        this._occasionally = false;
        this._allTheTime = false;
    }

    setValues(vif) {
        this._never = vif.alcohol_never;
        this._occasionally = vif.alcohol_occasionally;
        this._allTheTime = vif.alcohol_all_the_time;
    }

    build(vif) {
        vif.alcohol_never = this._never;
        vif.alcohol_occasionally = this._occasionally;
        vif.alcohol_all_the_time = this._allTheTime;
    }

    get never() {
        return this._never;
    }

    set never(value) {
        this.clearAll();
        this._never = value;
    }

    get occasionally() {
        return this._occasionally;
    }

    set occasionally(value) {
        this.clearAll();
        this._occasionally = value;
    }

    get allTheTime() {
        return this._allTheTime;
    }

    set allTheTime(value) {
        this.clearAll();
        this._allTheTime = value;
    }
}