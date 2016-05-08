import BrokerRelationBuilder from './brokerRelationBuilder';
import ExpenseBuilder from './expenseBuilder';
import MeetBrokerBuilder from './meetBrokerBuilder';

export default class Section3Builder {
    constructor(vif = null, brokerRelationBuilder = null, expenseBuilder = null, meetBrokerBuilder = null) {
        this.brokerRelation = brokerRelationBuilder || new BrokerRelationBuilder(vif);
        this.expense = expenseBuilder || new ExpenseBuilder(vif);
        this.meetBroker = meetBrokerBuilder || new MeetBrokerBuilder(vif);
        if(vif === null) {
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
        this._manpower = vif.manpower_involved;
        this._persuasion = vif.victim_recruited_in_village;
        this.marriedYears = vif.victim_married_to_broker_years;
        this.marriedMonths = vif.victim_married_to_broker_months;
        this.mobileExplain = vif.victim_how_met_broker_mobile_explanation;
        this.knownYears = vif.victim_how_long_known_broker_years;
        this.knownMonths = vif.victim_how_long_known_broker_months;
    }

    build(vif) {
        this.brokerRelation.build(vif);
        this.expense.build(vif);
        this.meetBroker.build(vif);
        this.buildFields(vif);
    }

    buildFields(vif) {
        vif.manpower_involved = this._manpower;
        vif.victim_recruited_in_village = this._persuasion;
        vif.victim_married_to_broker_years = this.marriedYears;
        vif.victim_married_to_broker_months = this.marriedMonths;
        vif.victim_how_met_broker_mobile_explanation = this.mobileExplain;
        vif.victim_how_long_known_broker_years = this.knownYears;
        vif.victim_how_long_known_broker_months = this.knownMonths;
    }

    get manpower() {
        return this._manpower;
    }

    set manpower(value) {
        if(value) {
            this._manpower = value;
        }
    }

    get persuasion() {
        return this._persuasion;
    }

    set persuasion(value) {
        if(value) {
            this._persuasion = value;
        }
    }
}