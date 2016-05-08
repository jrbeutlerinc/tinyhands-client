export default class PoliticalPartyBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.otherText = '';
            this.setValues(vif);
        }
    }

    clearAll() {
        this._maoist = false;
        this._uml = false;
        this._forum = false;
        this._taraiMadesh = false;
        this._shadbawona = false;
        this._rapraphaNepalThruhat = false;
        this._nepalJanadikarikForum = false;
        this._loktantrakParty = false;
        this._other = false;
        this._dontKnow = false;
    }

    setValues(vif) {
        this._maoist = vif.persons.political_party_maoist;
        this._uml = vif.persons.political_party_uml;
        this._forum = vif.persons.political_party_forum;
        this._taraiMadesh = vif.persons.political_party_tarai_madesh;
        this._shadbawona = vif.persons.political_party_shadbawona;
        this._rapraphaNepalThruhat = vif.persons.political_party_rnt;
        this._nepalJanadikarikForum = vif.persons.political_party_njf;
        this._loktantrakParty = vif.persons.political_party_loktantrak;
        this._other = vif.persons.political_party_other;
        this._dontKnow = vif.persons.political_party_dont_know;
        this._otherText = vif.persons.political_party_other_value;
    }

    build(vif = {}) {
        vif.persons.political_party_maoist = this._maoist;
        vif.persons.political_party_uml = this._uml;
        vif.persons.political_party_forum = this._forum;
        vif.persons.political_party_tarai_madesh = this._taraiMadesh;
        vif.persons.political_party_shadbawona = this._shadbawona;
        vif.persons.political_party_rnt = this._rapraphaNepalThruhat;
        vif.persons.political_party_njf = this._nepalJanadikarikForum;
        vif.persons.political_party_loktantrak = this._loktantrakParty;
        vif.persons.political_party_other = this._other;
        vif.persons.political_party_dont_know = this._dontKnow;
        vif.persons.political_party_other_value = this._otherText;
        return vif;
    }

    get maoist() {
        return this._maoist;
    }

    set maoist(value) {
        this.clearAll();
        this._maoist = value;
    }

    get uml() {
        return this._uml;
    }

    set uml(value) {
        this.clearAll();
        this._uml = value;
    }

    get forum() {
        return this._forum;
    }

    set forum(value) {
        this.clearAll();
        this._forum = value;
    }

    get taraiMadesh() {
        return this._taraiMadesh;
    }

    set taraiMadesh(value) {
        this.clearAll();
        this._taraiMadesh = value;
    }

    get shadbawona() {
        return this._shadbawona;
    }

    set shadbawona(value) {
        this.clearAll();
        this._shadbawona = value;
    }

    get rapraphaNepalThruhat() {
        return this._rapraphaNepalThruhat;
    }

    set rapraphaNepalThruhat(value) {
        this.clearAll();
        this._rapraphaNepalThruhat = value;
    }

    get nepalJanadikarikForum() {
        return this._nepalJanadikarikForum;
    }

    set nepalJanadikarikForum(value) {
        this.clearAll();
        this._maoist = _nepalJanadikarikForum;
    }

    get loktantrakParty() {
        return this._loktantrakParty;
    }

    set loktantrakParty(value) {
        this.clearAll();
        this._loktantrakParty = value;
    }

    get other() {
        return this._other;
    }

    set other(value) {
        this.clearAll();
        this._other = value;
    }

    get dontKnow() {
        return this._dontKnow;
    }

    set dontKnow(value) {
        this.clearAll();
        this._dontKnow = value;
    }

    get otherText() {
        return this._otherText;
    }

    set otherText(value) {
        this.clearAll();
        this._otherText = value;
    }
}