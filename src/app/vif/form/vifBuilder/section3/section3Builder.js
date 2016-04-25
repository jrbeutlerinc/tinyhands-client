export default class Section3Builder {
    constructor(vif = null, brokerRelationBuilder = null, expenseBuilder = null, meetBrokerBuilder = null) {
        this.brokerRelation = brokerRelationBuilder || new BrokerRelationBuilder(vif);
        this.expenseBuilder = expenseBuilder || new ExpenseBuilder(vif);
        this.meetBrokerBuilder = meetBrokerBuilder || new MeetBrokerBuilder(vif);
        if(vif == null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._manpower = null;
        this._persuasion = null;
        this.marriedYears = null;
        this.marriedMonths = null;
        this.mobileExplain = null;
        this.knownYears = null;
        this.knownMonths = null;
    }

    setValues(vif) {
        this._manpower = vif.victim_manpower;
        this._persuasion = vif.victim_persuasion;
        this.marriedYears = vif.victim_married_years;
        this.marriedMonths = vif.victim_married_months;
        this.mobileExplain = vif.victim_mobile_explain;
        this.knownYears = vif.victim_known_years;
        this.knownMonths = vif.victim_known_months;
    }

    build(vif) {
        this.brokerRelation.build(vif);
        this.expenseBuilder.build(vif);
        this.meetBrokerBuilder.build(vif);
        this.buildFields(vif);
    }

    buildFields(vif) {
        vif.victim_manpower = this._manpower;
        vif.victim_persuasion = this._persuasion;
        vif.victim_married_years = this.marriedYears;
        vif.victim_married_months = this.marriedMonths;
        vif.victim_mobile_explain = this.mobileExplain;
        vif.victim_known_years = this.knownYears;
        vif.victim_known_months = this.knownMonths;
    }

    get manpower() {
        return this._manpower;
    }

    set manpower(value) {
        if(value) {
            this._manpower = true;
        }
    }

    get persuasion() {
        return this._persuasion;
    }

    set persuasion(value) {
        if(value) {
            this._persuasion = true;
        }
    }
}