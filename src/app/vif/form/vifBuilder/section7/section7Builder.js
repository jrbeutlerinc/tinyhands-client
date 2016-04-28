import AlcoholBuilder from './alcoholBuilder';
import DrugsBuilder from './drugsBuilder';
import EconomicBuilder from './economicBuilder';
import EmotionalAbuseBuilder from './emotionalAbuseBuilder';
import PhysicalAbuseBuilder from './physicalAbuseBuilder';
import SexualAbuseBuilder from './sexualAbuseBuilder';

export default class Section7Builder {
    constructor(vif = null, alcoholBuilder = null, drugsBuilder = null, economicBuilder = null,
    emotionalAbuseBuilder = null, physicalAbuseBuilder = null, sexualAbuseBuilder = null) {

        this.alcohol = alcoholBuilder || new AlcoholBuilder(vif);
        this.drugs = drugsBuilder || new DrugsBuilder(vif);
        this.economic = economicBuilder || new EconomicBuilder(vif);
        this.emotionalAbuse = emotionalAbuseBuilder || new EmotionalAbuseBuilder(vif);
        this.physicalAbuse = physicalAbuseBuilder || new PhysicalAbuseBuilder(vif);
        this.sexualAbuse = sexualAbuseBuilder || new SexualAbuseBuilder(vif);

        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._question1 = null;
        this._question2 = null;
        this._question3 = null;
        this._question4 = null;
        this._question5 = null;
        this._question10 = null;
    }

    setValues(vif) {
        this._question1 = vif.guardian_knew_was_travelling_to_india;
        this._question2 = vif.family_pressured_victim;
        this._question3 = vif.family_will_try_sending_again;
        this._question4 = vif.victim_feels_safe_at_home;
        this._question5 = vif.victim_wants_to_go_home;
        this._question10 = vif.victim_had_suicidal_thoughts;
    }

    build(vif) {
        this.alcohol.build(vif);
        this.drugs.build(vif);
        this.economic.build(vif);
        this.emotionalAbuse.build(vif);
        this.physicalAbuse.build(vif);
        this.sexualAbuse.build(vif);
    }

    buildFields(vif) {
        vif.guardian_knew_was_travelling_to_india = this._question1;
        vif.family_pressured_victim = this._question2;
        vif.family_will_try_sending_again = this._question3;
        vif.victim_feels_safe_at_home = this._question4;
        vif.victim_wants_to_go_home = this._question5;
        vif.victim_had_suicidal_thoughts = this._question10;
    }

    get question1() {
        return this._question1;
    }

    set question1(value) {
        if(value) {
            this._question1 = value;
        }
    }

    get question2() {
        return this._question2;
    }

    set question2(value) {
        if(value) {
            this._question2 = value;
        }
    }

    get question3() {
        return this._question3;
    }

    set question3(value) {
        if(value) {
            this._question3 = value;
        }
    }

    get question4() {
        return this._question4;
    }

    set question4(value) {
        if(value) {
            this._question4 = value;
        }
    }

    get question5() {
        return this._question5;
    }

    set question5(value) {
        if(value) {
            this._question5 = value;
        }
    }

    get question10() {
        return this._question10;
    }

    set question10(value) {
        if(value) {
            this._question10 = value;
        }
    }
}