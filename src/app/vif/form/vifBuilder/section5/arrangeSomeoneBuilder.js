export default class ArrangeSomeoneBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._yes = false;
        this._no = false;
        this._meetingBroker = false;
        this._meetingCompanion = false;
    }

    setValues(vif) {
        this._yes = vif.meeting_at_border_yes;
        this._no = vif.meeting_at_border_no;
        this._meetingBroker = vif.meeting_at_border_meeting_broker;
        this._meetingCompanion = vif.meeting_at_border_meeting_companion;
    }

    build(vif = {}) {
        vif.meeting_at_border_yes = this._yes;
        vif.meeting_at_border_no = this._no;
        vif.meeting_at_border_meeting_broker = this._meetingBroker;
        vif.meeting_at_border_meeting_companion = this._meetingCompanion;
        return vif;
    }

    get yes() {
        return this._yes;
    }

    set yes(value) {
        this.clearAll();
        this._yes = value;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this.clearAll();
        this._no = value;
    }

    get meetingBroker() {
        return this._meetingBroker;
    }

    set meetingBroker(value) {
        this.clearAll();
        this._meetingBroker = value;
    }

    get meetingCompanion() {
        return this._meetingCompanion;
    }

    set meetingCompanion(value) {
        this.clearAll();
        this._meetingCompanion = value;
    }
}