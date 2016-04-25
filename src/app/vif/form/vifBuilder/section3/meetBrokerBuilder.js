export default class MeetBrokerBuilder {
    constructor(vif = null) {
        if(vif == null) {
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
        this._appraoched = false;
        this._friends = false;
        this._family = false;
        this._wedding = false;
        this._vehicle = false;
        this._hospital = false;
        this._myself = false;
        this._mobile = false;
    }

    setValues(vif) {
        this._community = vif.meet_broker_community;
        this._work = vif.meet_broker_work;
        this._school = vif.meet_broker_school;
        this._advertisement = vif.meet_broker_advertisement;
        this._appraoched = vif.meet_broker_appraoched;
        this._friends = vif.meet_broker_friends;
        this._family = vif.meet_broker_family;
        this._wedding = vif.meet_broker_wedding;
        this._vehicle = vif.meet_broker_vehicle;
        this._hospital = vif.meet_broker_hospital;
        this._myself = vif.meet_broker_myself;
        this._mobile = vif.meet_broker_mobile;
    }

    build(vif) {
        vif.meet_broker_community = this._community;
        vif.meet_broker_work = this._work;
        vif.meet_broker_school = this._school;
        vif.meet_broker_advertisement = this._advertisement;
        vif.meet_broker_appraoched = this._appraoched;
        vif.meet_broker_friends = this._friends;
        vif.meet_broker_family = this._family;
        vif.meet_broker_wedding = this._wedding;
        vif.meet_broker_vehicle = this._vehicle;
        vif.meet_broker_hospital = this._hospital;
        vif.meet_broker_myself = this._myself;
        vif.meet_broker_mobile = this._mobile;
        vif.meet_broker_other_value = this._otherText;
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

    get otherText() {
        return this._otherText;
    }

    set otherText(value) {
        this._otherText = value;
    }
}