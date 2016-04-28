export default class MainReasonBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._whoText = '';
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._noTraffickingSuspected = false;
        this._notEnoughInfo = false;
        this._victimsOwnPeople = false;
        this._goingHerself = false;
        this._ranAway = false;
        this._victimAfraidForReputation = false;
        this._victimAfraidForSafety = false;
        this._familyAfraidForReputation = false;
        this._familyAfraidForSafety = false;
        this._policeBribed = false;
        this._victimFamilyBribed = false;
        this._interferencePowerfulPeople = false;
        this._other = false;
    }

    setValues(vif) {
        this._noTraffickingSuspected = vif.reason_no_legal_no_trafficking_suspected;
        this._notEnoughInfo = vif.reason_no_legal_police_not_enough_info;
        this._victimsOwnPeople = vif.reason_no_legal_trafficker_is_own_people;
        this._goingHerself = vif.reason_no_legal_she_was_going_herself;
        this._ranAway = vif.reason_no_legal_trafficker_ran_away;
        this._victimAfraidForReputation = vif.reason_no_legal_victim_afraid_of_reputation;
        this._victimAfraidForSafety = vif.reason_no_legal_victim_afraid_for_safety;
        this._familyAfraidForReputation = vif.reason_no_legal_family_afraid_of_reputation;
        this._familyAfraidForSafety = vif.reason_no_legal_family_afraid_for_safety;
        this._policeBribed = vif.reason_no_legal_police_bribed;
        this._victimFamilyBribed = vif.reason_no_legal_victim_family_bribed;
        this._interferencePowerfulPeople = vif.reason_no_legal_interference_by_powerful_people;
        this._other = vif.reason_no_legal_other;
    }

    build(vif) {
        vif.reason_no_legal_no_trafficking_suspected = this._noTraffickingSuspected;
        vif.reason_no_legal_police_not_enough_info = this._notEnoughInfo;
        vif.reason_no_legal_trafficker_is_own_people = this._victimsOwnPeople;
        vif.reason_no_legal_she_was_going_herself = this._goingHerself;
        vif.reason_no_legal_trafficker_ran_away = this._ranAway;
        vif.reason_no_legal_victim_afraid_of_reputation = this._victimAfraidForReputation;
        vif.reason_no_legal_victim_afraid_for_safety = this._victimAfraidForSafety;
        vif.reason_no_legal_family_afraid_of_reputation = this._familyAfraidForReputation;
        vif.reason_no_legal_family_afraid_for_safety = this._familyAfraidForSafety;
        vif.reason_no_legal_police_bribed = this._policeBribed;
        vif.reason_no_legal_victim_family_bribed = this._victimFamilyBribed;
        vif.reason_no_legal_interference_by_powerful_people = this._interferencePowerfulPeople;
        vif.reason_no_legal_other = this._other;
        vif.reason_no_legal_interference_value = this._whoText;
        vif.reason_no_legal_other_value = this._otherText;
    }

    get noTraffickingSuspected() {
        return this._noTraffickingSuspected;
    }

    set noTraffickingSuspected(value) {
        this.clearAll();
        this._noTraffickingSuspected = value;
    }

    get notEnoughInfo() {
        return this._notEnoughInfo;
    }

    set notEnoughInfo(value) {
        this.clearAll();
        this._notEnoughInfo = value;
    }

    get victimsOwnPeople() {
        return this._victimsOwnPeople;
    }

    set victimsOwnPeople(value) {
        this.clearAll();
        this._victimsOwnPeople = value;
    }

    get goingHerself() {
        return this._goingHerself;
    }

    set goingHerself(value) {
        this.clearAll();
        this._goingHerself = value;
    }

    get ranAway() {
        return this._ranAway;
    }

    set ranAway(value) {
        this.clearAll();
        this._ranAway = value;
    }

    get victimAfraidForReputation() {
        return this._victimAfraidForReputation;
    }

    set victimAfraidForReputation(value) {
        this.clearAll();
        this._victimAfraidForReputation = value;
    }

    get victimAfraidForSafety() {
        return this._victimAfraidForSafety;
    }

    set victimAfraidForSafety(value) {
        this.clearAll();
        this._victimAfraidForSafety = value;
    }

    get familyAfraidForReputation() {
        return this._familyAfraidForReputation;
    }

    set familyAfraidForReputation(value) {
        this.clearAll();
        this._familyAfraidForReputation = value;
    }

    get familyAfraidForSafety() {
        return this._familyAfraidForSafety;
    }

    set familyAfraidForSafety(value) {
        this.clearAll();
        this._familyAfraidForSafety = value;
    }

    get policeBribed() {
        return this._policeBribed;
    }

    set policeBribed(value) {
        this.clearAll();
        this._policeBribed = value;
    }

    get victimFamilyBribed() {
        return this._victimFamilyBribed;
    }

    set victimFamilyBribed(value) {
        this.clearAll();
        this._victimFamilyBribed = value;
    }

    get interferencePowerfulPeople() {
        return this._interferencePowerfulPeople;
    }

    set interferencePowerfulPeople(value) {
        this.clearAll();
        this._interferencePowerfulPeople = value;
    }

    get other() {
        return this._other;
    }

    set other(value) {
        this.clearAll();
        this._other = value;
    }
}