export default class Question5Builder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._borderStaff = null;
        this._shelterStaff = null;
        this._traffickingAwareness = null;
        this._shelterAccommodations = null;
    }

    setValues(vif) {
        this._borderStaff = vif.tiny_hands_rating_border_staff;
        this._shelterStaff = vif.tiny_hands_rating_shelter_staff;
        this._traffickingAwareness = vif.tiny_hands_rating_trafficking_awareness;
        this._shelterAccommodations = vif.tiny_hands_rating_shelter_accommodations;
    }

    build(vif) {
        vif.tiny_hands_rating_border_staff = this._borderStaff;
        vif.tiny_hands_rating_shelter_staff = this._shelterStaff;
        vif.tiny_hands_rating_trafficking_awareness = this._traffickingAwareness;
        vif.tiny_hands_rating_shelter_accommodations = this._shelterAccommodations;
    }

    get borderStaff() {
        return this._borderStaff;
    }

    set borderStaff(value) {
        this.clearAll();
        this._borderStaff = value;
    }

    get shelterStaff() {
        return this._shelterStaff;
    }

    set shelterStaff(value) {
        this.clearAll();
        this._shelterStaff = value;
    }

    get traffickingAwareness() {
        return this._traffickingAwareness;
    }

    set traffickingAwareness(value) {
        this.clearAll();
        this._traffickingAwareness = value;
    }

    get shelterAccommodations() {
        return this._shelterAccommodations;
    }

    set shelterAccommodations(value) {
        this.clearAll();
        this._shelterAccommodations = value;
    }
}