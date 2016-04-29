export default class RecommendationBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._stayWithGuardians = false;
        this._stayWithOtherRelatives = false;
        this._anotherPlace = false;
        this._contactAftercare = false;
    }

    setValues(vif) {
        this._stayWithGuardians = vif.interviewer_recommendation_send_home;
        this._stayWithOtherRelatives = vif.interviewer_recommendation_send_to_other_relatives;
        this._anotherPlace = vif.interviewer_recommendation_find_other_place;
        this._contactAftercare = vif.interviewer_recommendation_contact_aftercare;
    }

    build(vif) {
        vif.interviewer_recommendation_send_home = this._stayWithGuardians;
        vif.interviewer_recommendation_send_to_other_relatives = this._stayWithOtherRelatives;
        vif.interviewer_recommendation_find_other_place = this._anotherPlace;
        vif.interviewer_recommendation_contact_aftercare = this._contactAftercare;
    }

    get stayWithGuardians() {
        return this._stayWithGuardians;
    }

    set stayWithGuardians(value) {
        this._stayWithGuardians = value;
    }

    get stayWithOtherRelatives() {
        return this._stayWithOtherRelatives;
    }

    set stayWithOtherRelatives(value) {
        this._stayWithOtherRelatives = value;
    }

    get anotherPlace() {
        return this._anotherPlace;
    }

    set anotherPlace(value) {
        this._anotherPlace = value;
    }

    get contactAftercare() {
        return this._contactAftercare;
    }

    set contactAftercare(value) {
        this._contactAftercare = value;
    }
}