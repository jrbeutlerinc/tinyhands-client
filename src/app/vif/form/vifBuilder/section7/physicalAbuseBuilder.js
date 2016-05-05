export default class PhysicalAbuseBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._never = false;
        this._rarely = false;
        this._frequent = false;
    }

    setValues(vif) {
        this._never = vif.home_had_physical_abuse_never;
        this._rarely = vif.home_had_physical_abuse_rarely;
        this._frequent = vif.home_had_physical_abuse_frequently;
    }

    build(vif = {}) {
        vif.home_had_physical_abuse_never = this._never;
        vif.home_had_physical_abuse_rarely = this._rarely;
        vif.home_had_physical_abuse_frequently = this._frequent;
    }

    get never() {
        return this._never;
    }

    set never(value) {
        this.clearAll();
        this._never = value;
    }

    get rarely() {
        return this._rarely;
    }

    set rarely(value) {
        this.clearAll();
        this._rarely = value;
    }

    get frequent() {
        return this._frequent;
    }

    set frequent(value) {
        this.clearAll();
        this._frequent = value;
    }
}