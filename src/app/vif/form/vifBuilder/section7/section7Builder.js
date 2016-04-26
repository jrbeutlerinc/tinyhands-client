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
        this._question1 = vif.victim_question_1;
        this._question2 = vif.victim_question_2;
        this._question3 = vif.victim_question_3;
        this._question4 = vif.victim_question_4;
        this._question5 = vif.victim_question_5;
        this._question10 = vif.victim_question_10;
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
        vif.victim_question_1 = this._question1;
        vif.victim_question_2 = this._question2;
        vif.victim_question_3 = this._question3;
        vif.victim_question_4 = this._question4;
        vif.victim_question_5 = this._question5;
        vif.victim_question_10 = this._question10;
    }

    get question1() {
        return this._question1;
    }

    set question1(value) {
        if(value) {
            this._question1 = true;
        }
    }

    get question2() {
        return this._question2;
    }

    set question2(value) {
        if(value) {
            this._question2 = true;
        }
    }

    get question3() {
        return this._question3;
    }

    set question3(value) {
        if(value) {
            this._question3 = true;
        }
    }

    get question4() {
        return this._question4;
    }

    set question4(value) {
        if(value) {
            this._question4 = true;
        }
    }

    get question5() {
        return this._question5;
    }

    set question5(value) {
        if(value) {
            this._question5 = true;
        }
    }

    get question10() {
        return this._question10;
    }

    set question10(value) {
        if(value) {
            this._question10 = true;
        }
    }
}