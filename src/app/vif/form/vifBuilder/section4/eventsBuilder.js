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

    setValues(vif = {}) {
        this._sexualHarassment = vif.abuse_happened_sexual_harassment;
        this._sexualAbuse = vif.abuse_happened_sexual_abuse;
        this._physicalAbuse = vif.abuse_happened_physical_abuse;
        this._threats = vif.abuse_happened_sexual_threats;
        this._deniedProperFood = vif.abuse_happened_denied_proper_food;
        this._forcedToTakeDrugs = vif.abuse_happened_forced_to_take_drugs;
        this._byWhomText = vif.abuse_happened_by_whom;
        this._explainText = vif.abuse_happened_explanation;
        return vif;
    }

    build(vif) {
        vif.abuse_happened_sexual_harassment = this._sexualHarassment;
        vif.abuse_happened_sexual_abuse = this._sexualAbuse;
        vif.abuse_happened_physical_abuse = this._physicalAbuse;
        vif.abuse_happened_sexual_threats = this._threats;
        vif.abuse_happened_denied_proper_food = this._deniedProperFood;
        vif.abuse_happened_forced_to_take_drugs = this._forcedToTakeDrugs;
        vif.abuse_happened_by_whom = this._byWhomText;
        vif.abuse_happened_explanation = this._explainText;
    }

    get sexualHarassment() {
        return this._sexualHarassment;
    }

    set sexualHarassment(value) {
        this.clearAll();
        this._sexualHarassment = value;
    }

    get sexualAbuse() {
        return this._sexualAbuse;
    }

    set sexualAbuse(value) {
        this.clearAll();
        this._sexualAbuse = value;
    }

    get physicalAbuse() {
        return this._physicalAbuse;
    }

    set physicalAbuse(value) {
        this.clearAll();
        this._physicalAbuse = value;
    }

    get threats() {
        return this._threats;
    }

    set threats(value) {
        this.clearAll();
        this._threats = value;
    }

    get deniedProperFood() {
        return this._deniedProperFood;
    }

    set deniedProperFood(value) {
        this.clearAll();
        this._deniedProperFood = value;
    }

    get forcedToTakeDrugs() {
        return this._forcedToTakeDrugs;
    }

    set forcedToTakeDrugs(value) {
        this.clearAll();
        this._forcedToTakeDrugs = value;
    }

    get byWhomText() {
        return this._byWhomText;
    }

    set byWhomText(value) {
        this.clearAll();
        this._byWhomText = value;
    }

    get explainText() {
        return this._explainText;
    }

    set explainText(value) {
        this.clearAll();
        this._explainText = value;
    }
}