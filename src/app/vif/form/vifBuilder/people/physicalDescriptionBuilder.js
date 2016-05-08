export default class PhysicalDescriptionBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this._appearanceOther = '';
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._kirat = false;
        this._sherpa = false;
        this._madeshi = false;
        this._pahadi = false;
        this._newari = false;
    }

    setValues(vif) {
        this._kirat = vif.persons.physical_description_kirat;
        this._sherpa = vif.persons.physical_description_sherpa;
        this._madeshi = vif.persons.physical_description_madeshi;
        this._pahadi = vif.persons.physical_description_pahadi;
        this._newari = vif.persons.physical_description_newari;
        this._appearanceOther = vif.persons.appearance_other;
    }

    build(vif = {}) {
        vif.persons.physical_description_kirat = this._kirat;
        vif.persons.physical_description_sherpa = this._sherpa;
        vif.persons.physical_description_madeshi = this._madeshi;
        vif.persons.physical_description_pahadi = this._pahadi;
        vif.persons.physical_description_newari = this._newari;
        vif.persons.appearance_other = this._appearanceOther;
        return vif;
    }

    get kirat() {
        return this._kirat;
    }

    set kirat(value) {
        this.clearAll();
        this._kirat = value;
    }

    get sherpa() {
        return this._sherpa;
    }

    set sherpa(value) {
        this.clearAll();
        this._sherpa = value;
    }

    get madeshi() {
        return this._madeshi;
    }

    set madeshi(value) {
        this.clearAll();
        this._madeshi = value;
    }

    get pahadi() {
        return this._pahadi;
    }

    set pahadi(value) {
        this.clearAll();
        this._pahadi = value;
    }

    get newari() {
        return this._newari;
    }

    set newari(value) {
        this.clearAll();
        this._newari = value;
    }

    get appearanceOther() {
        return this._appearanceOther;
    }

    set appearanceOther(value) {
        this.clearAll();
        this._appearanceOther = value;
    }
}