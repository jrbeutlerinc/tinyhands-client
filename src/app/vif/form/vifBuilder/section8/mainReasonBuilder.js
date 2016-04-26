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
    }

    setValues(vif) {
        this._noTraffickingSuspected = vif.main_reason_no_trafficking_suspected;
        this._notEnoughInfo = vif.main_reason_not_enough_info;
        this._victimsOwnPeople = vif.main_reason_victims_own_people;
        this._goingHerself = vif.main_reason_going_herself;
        this._ranAway = vif.main_reason_ran_away;
        this._victimAfraidForReputation = vif.main_reason_victim_afraid_for_reputation;
        this._victimAfraidForSafety = vif.main_reason_victim_afraid_for_safety;
        this._familyAfraidForReputation = vif.main_reason_family_afraid_for_reputation;
        this._familyAfraidForSafety = vif.main_reason_family_afraid_for_safety;
        this._policeBribed = vif.main_reason_police_bribed;
        this._victimFamilyBribed = vif.main_reason_victim_family_bribed;
    }

    build(vif) {
        vif.main_reason_no_trafficking_suspected = this._noTraffickingSuspected;
        vif.main_reason_not_enough_info = this._notEnoughInfo;
        vif.main_reason_victims_own_people = this._victimsOwnPeople;
        vif.main_reason_going_herself = this._goingHerself;
        vif.main_reason_ran_away = this._ranAway;
        vif.main_reason_victim_afraid_for_reputation = this._victimAfraidForReputation;
        vif.main_reason_victim_afraid_for_safety = this._victimAfraidForSafety;
        vif.main_reason_family_afraid_for_reputation = this._familyAfraidForReputation;
        vif.main_reason_family_afraid_for_safety = this._familyAfraidForSafety;
        vif.main_reason_police_bribed = this._policeBribed;
        vif.main_reason_victim_family_bribed = this._victimFamilyBribed;
        vif.main_reason_who_value = this._whoText;
        vif.main_reason_other_value = this._otherText;
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
}