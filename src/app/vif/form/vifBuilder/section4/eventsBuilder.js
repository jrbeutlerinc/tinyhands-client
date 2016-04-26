export default class EventsBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._byWhomText = '';
            this._explainText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._sexualHarassment = false;
        this._sexualAbuse = false;
        this._physicalAbuse = false;
        this._threats = false;
        this._deniedProperFood = false;
        this._forcedToTakeDrugs = false;
    }

    setValues(vif) {
        this._sexualHarassment = vif.events_sexual_harassment;
        this._sexualAbuse = vif.events_sexual_abuse;
        this._physicalAbuse = vif.events_physical_abuse;
        this._threats = vif.events_threats;
        this._deniedProperFood = vif.events_denied_proper_food;
        this._forcedToTakeDrugs = vif.events_forced_to_take_drugs;
    }

    build(vif) {
        vif.events_sexual_harassment = this._sexualHarassment;
        vif.events_sexual_abuse = this._sexualAbuse;
        vif.events_physical_abuse = this._physicalAbuse;
        vif.events_threats = this._threats;
        vif.events_denied_proper_food = this._deniedProperFood;
        vif.events_forced_to_take_drugs = this._forcedToTakeDrugs;
        vif.events_by_whom_value = this._byWhomText;
        vif.events_explain_value = this._explainText;
    }

    get sexualHarassment() {
        return this._sexualHarassment;
    }

    set sexualHarassment(value) {
        this._sexualHarassment = value;
    }

    get sexualAbuse() {
        return this._sexualAbuse;
    }

    set sexualAbuse(value) {
        this._sexualAbuse = value;
    }

    get physicalAbuse() {
        return this._physicalAbuse;
    }

    set physicalAbuse(value) {
        this._physicalAbuse = value;
    }

    get threats() {
        return this._threats;
    }

    set threats(value) {
        this._threats = value;
    }

    get deniedProperFood() {
        return this._deniedProperFood;
    }

    set deniedProperFood(value) {
        this._deniedProperFood = value;
    }

    get forcedToTakeDrugs() {
        return this._forcedToTakeDrugs;
    }

    set forcedToTakeDrugs(value) {
        this._forcedToTakeDrugs = value;
    }
}