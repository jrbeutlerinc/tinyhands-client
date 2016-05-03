export default class WhoIsThisBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        clearRelation();
        clearPerson();
    }

    clearRelation() {
        this._boss = false;
        this._coworker = false;
        this._relative = false;
    }

    clearPerson() {
        this._trafficker = false;
        this._contactOfHusband = false;
    }

    setValues(vif) {
        this._magar = vif.victim_caste_magar;
        this._boss = vif.persons.who_is_this_relationship_boss_of;
    }

    build(vif = {}) {
        vif.victim_caste_magar = this._magar;
        vif.victim_caste_brahmin = this._brahmin;
        vif.victim_caste_tamang = this._tamang;
        vif.victim_caste_jaisi = this._jaisi;
        vif.victim_caste_chhetr = this._chhetri;
        vif.victim_caste_mongolian = this._mongolian;
        vif.victim_caste_thakuri = this._thakuri;
        vif.victim_caste_newar = this._newar;
        vif.victim_caste_muslim = this._muslim;
        vif.victim_caste_madeshiTerai = this._madeshiTerai;
        vif.victim_caste_dalit = this._dalitUnderPriviledged;
        vif.victim_caste_other = this._other;
        vif.victim_caste_other_value = this._otherText;
        return vif;
    }

    get magar() {
        return this._magar;
    }

    set magar(value) {
        this.clearAll();
        this._magar = value;
    }
}