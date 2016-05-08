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
        this._boss = vif.persons.who_is_this_relationship_boss_of;
        this._coworker = vif.persons.who_is_this_relationship_coworker_of;
        this._relative = vif.persons.who_is_this_relationship_own_relative_of;
        this._trafficker = vif.persons.who_is_this_role_india_trafficker;
        this._contactOfHusband = vif.persons.who_is_this_role_contact_of_husband;
    }

    build(vif = {}) {
        vif.persons.who_is_this_relationship_boss_of = this._boss;
        vif.persons.who_is_this_relationship_coworker_of = this._coworker;
        vif.persons.who_is_this_relationship_own_relative_of = this._relative;
        vif.persons.who_is_this_role_india_trafficker = this._trafficker;
        vif.persons.who_is_this_role_contact_of_husband = this._contactOfHusband;
        return vif;
    }

    get boss() {
        return this._boss;
    }

    set boss(value) {
        this.clearAll();
        this._boss = value;
    }

    get coworker() {
        return this._coworker;
    }

    set coworker(value) {
        this.clearAll();
        this._coworker = value;
    }

    get relative() {
        return this._relative;
    }

    set relative(value) {
        this.clearAll();
        this._relative = value;
    }

    get trafficker() {
        return this._trafficker;
    }

    set trafficker(value) {
        this.clearAll();
        this._trafficker = value;
    }

    get contactOfHusband() {
        return this._contactOfHusband;
    }

    set contactOfHusband(value) {
        this.clearAll();
        this._contactOfHusband = value;
    }
}