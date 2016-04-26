import ArrangeSomeoneBuilder from './arrangeSomeoneBuilder';

export default class Section5Builder {
    constructor(vif = null, arrangeSomeoneBuilder = null) {
        this.arrangeSomeone = arrangeSomeoneBuilder || new ArrangeSomeoneBuilder(vif);

        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._knowDetails = null;
        this._otherPersonOrPlaceQ1 = null;
        this._otherPersonOrPlaceQ2 = null;
        this._otherPersonOrPlaceQ3 = null;
        this._otherPersonOrPlaceQ4 = null;
        this._otherPersonOrPlaceQ5 = null;
        this._sexIndustry = null;
        this._workSendingGirlsOverseas = null;
    }

    setValues(vif) {
        this._knowDetails = vif.victim_know_details;
        this._otherPersonOrPlaceQ1 = vif.victim_other_person_or_place_Q1;
        this._otherPersonOrPlaceQ2 = vif.victim_other_person_or_place_Q2;
        this._otherPersonOrPlaceQ3 = vif.victim_other_person_or_place_Q3;
        this._otherPersonOrPlaceQ4 = vif.victim_other_person_or_place_Q4;
        this._otherPersonOrPlaceQ5 = vif.victim_other_person_or_place_Q5;
        this._sexIndustry = vif.victim_sex_industry;
        this._workSendingGirlsOverseas = vif.victim_work_sending_girls_overseas;
    }

    build(vif) {
        this.arrangeSomeone.build(vif);
    }

    buildFields(vif) {
        vif.victim_know_details = this._knowDetails;
        vif.victim_other_person_or_place_Q1 = this._otherPersonOrPlaceQ1;
        vif.victim_other_person_or_place_Q2 = this._otherPersonOrPlaceQ2;
        vif.victim_other_person_or_place_Q3 = this._otherPersonOrPlaceQ3;
        vif.victim_other_person_or_place_Q4 = this._otherPersonOrPlaceQ4;
        vif.victim_other_person_or_place_Q5 = this._otherPersonOrPlaceQ5;
        vif.victim_sex_industry = this._sexIndustry;
        vif.victim_work_sending_girls_overseas = this._workSendingGirlsOverseas;
    }

    get knowDetails() {
        return this._knowDetails;
    }

    set knowDetails(value) {
        if(value === 'yes') {
            this._knowDetails = true;
        } else {
            this._knowDetails = false;
        }
    }

    get otherPersonOrPlaceQ1() {
        return this._otherPersonOrPlaceQ1;
    }

    set otherPersonOrPlaceQ1(value) {
        if(value) {
            this._otherPersonOrPlaceQ1 = value;
        }
    }

    get otherPersonOrPlaceQ2() {
        return this._otherPersonOrPlaceQ2;
    }

    set otherPersonOrPlaceQ2(value) {
        if(value) {
            this._otherPersonOrPlaceQ2 = value;
        }
    }

    get otherPersonOrPlaceQ3() {
        return this._otherPersonOrPlaceQ3;
    }

    set otherPersonOrPlaceQ3(value) {
        if(value) {
            this._otherPersonOrPlaceQ3 = value;
        }
    }

    get otherPersonOrPlaceQ4() {
        return this._otherPersonOrPlaceQ4;
    }

    set otherPersonOrPlaceQ4(value) {
        if(value) {
            this._otherPersonOrPlaceQ4 = value;
        }
    }

    get otherPersonOrPlaceQ5() {
        return this._otherPersonOrPlaceQ5;
    }

    set otherPersonOrPlaceQ5(value) {
        if(value) {
            this._otherPersonOrPlaceQ5 = value;
        }
    }

    get sexIndustry() {
        return this._sexIndustry;
    }

    set sexIndustry(value) {
        if(value) {
            this._sexIndustry = value;
        }
    }

    get workSendingGirlsOverseas() {
        return this._workSendingGirlsOverseas;
    }

    set workSendingGirlsOverseas(value) {
        if(value) {
            this._workSendingGirlsOverseas = value;
        }
    }
}