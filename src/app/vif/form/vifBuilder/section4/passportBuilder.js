export default class PassportBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._noPassport = false;
        this._realPassport = false;
        this._falseName = false;
        this._falseInfo = false;
        this._fake = false;
    }

    setValues(vif) {
        this._noPassport = vif.passport_made_no_passport_made;
        this._realPassport = vif.passport_made_real_passport_made;
        this._falseName = vif.passport_made_passport_included_false_name;
        this._falseInfo = vif.passport_made_passport_included_other_false_info;
        this._fake = vif.passport_made_passport_was_fake;
    }

    build(vif = {}) {
        vif.passport_made_no_passport_made = this._noPassport;
        vif.passport_made_real_passport_made = this._realPassport;
        vif.passport_made_passport_included_false_name = this._falseName;
        vif.passport_made_passport_included_other_false_info = this._falseInfo;
        vif.passport_made_passport_was_fake = this._fake;
        return vif;
    }

    get noPassport() {
        return this._noPassport;
    }

    set noPassport(value) {
        this.clearAll();
        this._noPassport = value;
    }

    get realPassport() {
        return this._realPassport;
    }

    set realPassport(value) {
        this.clearAll();
        this._realPassport = value;
    }

    get falseName() {
        return this._falseName;
    }

    set falseName(value) {
        this.clearAll();
        this._falseName = value;
    }

    get falseInfo() {
        return this._falseInfo;
    }

    set falseInfo(value) {
        this.clearAll();
        this._falseInfo = value;
    }

    get fake() {
        return this._fake;
    }

    set fake(value) {
        this.clearAll();
        this._fake = value;
    }
}