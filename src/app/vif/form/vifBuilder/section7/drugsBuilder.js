export default class DrugsBuilder {
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
        this._never = vif.victim_guardian_uses_drugs_never;
        this._occasionally = vif.victim_guardian_uses_drugs_occasionally;
        this._allTheTime = vif.victim_guardian_uses_drugs_all_the_time;
    }

    build(vif = {}) {
        vif.victim_guardian_uses_drugs_never = this._never;
        vif.victim_guardian_uses_drugs_occasionally = this._occasionally;
        vif.victim_guardian_uses_drugs_all_the_time = this._allTheTime;
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