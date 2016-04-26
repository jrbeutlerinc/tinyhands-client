import LegalActionBuilder from './legalActionBuilder';
import MainReasonBuilder from './mainReasonBuilder';
import RecommendationBuilder from './recommendationBuilder';

export default class Section8Builder {
    constructor(vif = null, legalActionBuilder = null, mainReasonBuilder = null, recommendationBuilder = null) {

        this.legalAction = legalActionBuilder || new LegalActionBuilder(vif);
        this.mainReason = mainReasonBuilder || new MainReasonBuilder(vif);
        this.recommendation = recommendationBuilder || new RecommendationBuilder(vif);

        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._moreInvolved = null;
        this._caseNotes = null;
    }

    setValues(vif) {
        this._moreInvolved = vif.victim_more_involved;
        this._caseNotes = vif.victim_case_notes;
    }

    build(vif) {
        this.legalAction.build(vif);
        this.mainReason.build(vif);
        this.recommendation.build(vif);
    }

    buildFields(vif) {
        vif.victim_more_involved = this._moreInvolved;
        vif.victim_case_notes = this._caseNotes;
    }

    get moreInvolved() {
        return this._moreInvolved;
    }

    set moreInvolved(value) {
        if(value) {
            this._moreInvolved = value;
        }
    }

    get caseNotes() {
        return this._caseNotes;
    }

    set caseNotes(value) {
        if(value) {
            this._caseNotes = value;
        }
    }
}