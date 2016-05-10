export default class BrokerRelationBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._dad = false;
        this._mom = false;
        this._uncle = false;
        this._aunt = false;
        this._bro = false;
        this._sister = false;
        this._otherRelative = false;
        this._friend = false;
        this._agent = false;
        this._husband = false;
        this._boyfriend = false;
        this._neighbor = false;
        this._recentlyMet = false;
        this._contractor = false;
        this._other = false;
    }

    setValues(vif) {
        this._dad = vif.brokers_relation_to_victim_own_dad;
        this._mom = vif.brokers_relation_to_victim_own_mom;
        this._uncle = vif.brokers_relation_to_victim_own_uncle;
        this._aunt = vif.brokers_relation_to_victim_own_aunt;
        this._bro = vif.brokers_relation_to_victim_own_bro;
        this._sister = vif.brokers_relation_to_victim_own_sister;
        this._otherRelative = vif.brokers_relation_to_victim_own_other_relative;
        this._friend = vif.brokers_relation_to_victim_friend;
        this._agent = vif.brokers_relation_to_victim_agent;
        this._husband = vif.brokers_relation_to_victim_husband;
        this._boyfriend = vif.brokers_relation_to_victim_boyfriend;
        this._neighbor = vif.brokers_relation_to_victim_neighbor;
        this._recentlyMet = vif.brokers_relation_to_victim_recently_met;
        this._contractor = vif.brokers_relation_to_victim_contractor;
        this._other = vif.brokers_relation_to_victim_other;
        this._otherText  = vif.brokers_relation_to_victim_other_value;
    }

    build(vif = {}) {
        vif.brokers_relation_to_victim_own_dad = this._dad;
        vif.brokers_relation_to_victim_own_mom = this._mom;
        vif.brokers_relation_to_victim_own_uncle = this._uncle;
        vif.brokers_relation_to_victim_own_aunt = this._aunt;
        vif.brokers_relation_to_victim_own_bro = this._bro;
        vif.brokers_relation_to_victim_own_sister = this._sister;
        vif.brokers_relation_to_victim_own_other_relative = this._otherRelative;
        vif.brokers_relation_to_victim_friend = this._friend;
        vif.brokers_relation_to_victim_agent = this._agent;
        vif.brokers_relation_to_victim_husband = this._husband;
        vif.brokers_relation_to_victim_boyfriend = this._boyfriend;
        vif.brokers_relation_to_victim_neighbor = this._neighbor;
        vif.brokers_relation_to_victim_recently_met = this._recentlyMet;
        vif.brokers_relation_to_victim_contractor = this._contractor;
        vif.brokers_relation_to_victim_other = this._other;
        vif.brokers_relation_to_victim_other_value = this._otherText;
        return vif;
    }

    get dad() {
        return this._dad;
    }

    set dad(value) {
        this.clearAll();
        this._dad = value;
    }

    get mom() {
        return this._mom;
    }

    set mom(value) {
        this.clearAll();
        this._mom = value;
    }

    get uncle() {
        return this._uncle;
    }

    set uncle(value) {
        this.clearAll();
        this._uncle = value;
    }

    get aunt() {
        return this._aunt;
    }

    set aunt(value) {
        this.clearAll();
        this._aunt = value;
    }

    get bro() {
        return this._bro;
    }

    set bro(value) {
        this.clearAll();
        this._bro = value;
    }

    get sister() {
        return this._sister;
    }

    set sister(value) {
        this.clearAll();
        this._sister = value;
    }

    get otherRelative() {
        return this._otherRelative;
    }

    set otherRelative(value) {
        this.clearAll();
        this._otherRelative = value;
    }

    get friend() {
        return this._friend;
    }

    set friend(value) {
        this.clearAll();
        this._friend = value;
    }

    get agent() {
        return this._agent;
    }

    set agent(value) {
        this.clearAll();
        this._agent = value;
    }

    get husband() {
        return this._husband;
    }

    set husband(value) {
        this.clearAll();
        this._husband = value;
    }

    get boyfriend() {
        return this._boyfriend;
    }

    set boyfriend(value) {
        this.clearAll();
        this._boyfriend = value;
    }

    get neighbor() {
        return this._neighbor;
    }

    set neighbor(value) {
        this.clearAll();
        this._neighbor = value;
    }

    get recentlyMet() {
        return this._recentlyMet;
    }

    set recentlyMet(value) {
        this.clearAll();
        this._recentlyMet = value;
    }

    get contractor() {
        return this._contractor;
    }

    set contractor(value) {
        this.clearAll();
        this._contractor = value;
    }

    get other() {
        return this._other;
    }

    set other(value) {
        this.clearAll();
        this._other = value;
    }

    get otherText() {
        return this._otherText;
    }

    set otherText(value) {
        this._otherText = value;
    }
}