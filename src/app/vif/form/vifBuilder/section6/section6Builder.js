import Question1Builder from './question1Builder';
import Question2Builder from './question2Builder';
import Question3Builder from './question3Builder';
import Question4Builder from './question4Builder';
import Question5Builder from './question5Builder';

export default class Section6Builder {
    constructor(vif = null, question1Builder = null, question2Builder = null, question3Builder = null,
        question4Builder = null, question5Builder = null) {

        this.question1 = question1Builder || new Question1Builder(vif);
        this.question2 = question2Builder || new Question2Builder(vif);
        this.question3 = question3Builder || new Question3Builder(vif);
        this.question4 = question4Builder || new Question4Builder(vif);
        this.question5 = question5Builder || new Question5Builder(vif);

        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._howCanWeServeBetter = null;
    }

    setValues(vif) {
        this._howCanWeServeBetter = vif.how_can_we_serve_you_better;
    }

    build(vif) {
        this.question1.build(vif);
        this.question2.build(vif);
        this.question3.build(vif);
        this.question4.build(vif);
        this.question5.build(vif);
    }

    buildFields(vif) {
        vif.how_can_we_serve_you_better = this.howCanWeServeBetter;
    }

    get howCanWeServeBetter() {
        return this._howCanWeServeBetter;
    }

    set howCanWeServeBetter(value) {
        if(value) {
            this._howCanWeServeBetter = value;
        }
    }
}