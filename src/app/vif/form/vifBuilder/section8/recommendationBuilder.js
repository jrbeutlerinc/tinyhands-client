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
        this._stayWithGuardians = vif.recommendation_stay_with_guardians;
        this._stayWithOtherRelatives = vif.recommendation_stay_with_other_relatives;
        this._anotherPlace = vif.recommendation_another_place;
        this._contactAftercare = vif.recommendation_contact_aftercare;
    }

    build(vif) {
        vif.recommendation_stay_with_guardians = this._stayWithGuardians;
        vif.recommendation_stay_with_other_relatives = this._stayWithOtherRelatives;
        vif.recommendation_another_place = this._anotherPlace;
        vif.recommendation_contact_aftercare = this._contactAftercare;
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