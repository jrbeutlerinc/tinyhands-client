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
        this._hasSignature = false;
        this._caseNotes = null;
        this._scannedForm = null;
    }

    setValues(vif) {
        this._moreInvolved = vif.other_people_and_places_involved;
        this._hasSignature = vif.has_signature;
        this._caseNotes = vif.case_notes;
        this._scannedForm = vif.scanned_form;
    }

    build(vif) {
        this.legalAction.build(vif);
        this.mainReason.build(vif);
        this.recommendation.build(vif);
    }

    buildFields(vif) {
        vif.other_people_and_places_involved = this._moreInvolved;
        vif.has_signature = this._hasSignature;
        vif.case_notes = this._caseNotes;
        vif.scanned_form = this._scannedForm;
    }

    get moreInvolved() {
        return this._moreInvolved;
    }

    set moreInvolved(value) {
        this._moreInvolved = value;
    }

    get hasSignature() {
        return this._hasSignature;
    }

    set hasSignature(value) {
        this._hasSignature = value;
    }

    get caseNotes() {
        return this._caseNotes;
    }

    set caseNotes(value) {
        this._caseNotes = value;
    }

    get scannedForm() {
        return this._scannedForm;
    }

    set scannedForm(value) {
        this._scannedForm = value;
    }
}