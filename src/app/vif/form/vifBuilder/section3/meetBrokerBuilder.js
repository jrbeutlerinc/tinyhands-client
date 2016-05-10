export default class MeetBrokerBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._community = false;
        this._work = false;
        this._school = false;
        this._advertisement = false;
        this._approached = false;
        this._friends = false;
        this._family = false;
        this._wedding = false;
        this._vehicle = false;
        this._hospital = false;
        this._myself = false;
        this._mobile = false;
        this._other = false;
    }

    setValues(vif) {
        this._community = vif.victim_how_met_broker_from_community;
        this._work = vif.victim_how_met_broker_at_work;
        this._school = vif.victim_how_met_broker_at_school;
        this._advertisement = vif.victim_how_met_broker_job_advertisement;
        this._approached = vif.victim_how_met_broker_he_approached_me;
        this._friends = vif.victim_how_met_broker_through_friends;
        this._family = vif.victim_how_met_broker_through_family;
        this._wedding = vif.victim_how_met_broker_at_wedding;
        this._vehicle = vif.victim_how_met_broker_in_a_vehicle;
        this._hospital = vif.victim_how_met_broker_in_a_hospital;
        this._myself = vif.victim_how_met_broker_went_myself;
        this._mobile = vif.victim_how_met_broker_called_my_mobile;
        this._other = vif.victim_how_met_broker_other;
        this._otherText = vif.victim_how_met_broker_other_value;
    }

    build(vif = {}) {
        vif.victim_how_met_broker_from_community = this._community;
        vif.victim_how_met_broker_at_work = this._work;
        vif.victim_how_met_broker_at_school = this._school;
        vif.victim_how_met_broker_job_advertisement = this._advertisement;
        vif.victim_how_met_broker_he_approached_me = this._approached;
        vif.victim_how_met_broker_through_friends = this._friends;
        vif.victim_how_met_broker_through_family = this._family;
        vif.victim_how_met_broker_at_wedding = this._wedding;
        vif.victim_how_met_broker_in_a_vehicle = this._vehicle;
        vif.victim_how_met_broker_in_a_hospital = this._hospital;
        vif.victim_how_met_broker_went_myself = this._myself;
        vif.victim_how_met_broker_called_my_mobile = this._mobile;
        vif.victim_how_met_broker_other = this._other;
        vif.victim_how_met_broker_other_value = this._otherText;
        return vif;
    }

    get community() {
        return this._community;
    }

    set community(value) {
        this.clearAll();
        this._community = value;
    }

    get work() {
        return this._work;
    }

    set work(value) {
        this.clearAll();
        this._work = value;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this.clearAll();
        this._school = value;
    }

    get advertisement() {
        return this._advertisement;
    }

    set advertisement(value) {
        this.clearAll();
        this._advertisement = value;
    }

    get approached() {
        return this._approached;
    }

    set approached(value) {
        this.clearAll();
        this._approached = value;
    }

    get friends() {
        return this._friends;
    }

    set friends(value) {
        this.clearAll();
        this._friends = value;
    }

    get family() {
        return this._family;
    }

    set family(value) {
        this.clearAll();
        this._family = value;
    }

    get wedding() {
        return this._wedding;
    }

    set wedding(value) {
        this.clearAll();
        this._wedding = value;
    }

    get vehicle() {
        return this._vehicle;
    }

    set vehicle(value) {
        this.clearAll();
        this._vehicle = value;
    }

    get hospital() {
        return this._hospital;
    }

    set hospital(value) {
        this.clearAll();
        this._hospital = value;
    }

    get myself() {
        return this._myself;
    }

    set myself(value) {
        this.clearAll();
        this._myself = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this.clearAll();
        this._mobile = value;
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