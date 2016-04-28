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
        this._knowDetails = vif.victim_know_details_about_destination;
        this._otherPersonOrPlaceQ1 = vif.other_involved_person_in_india;
        this._otherPersonOrPlaceQ2 = vif.other_involved_husband_trafficker;
        this._otherPersonOrPlaceQ3 = vif.other_involved_someone_met_along_the_way;
        this._otherPersonOrPlaceQ4 = vif.other_involved_someone_involved_in_trafficking;
        this._otherPersonOrPlaceQ5 = vif.other_involved_place_involved_in_trafficking;
        this._sexIndustry = vif.victim_has_worked_in_sex_industry;
        this._workSendingGirlsOverseas = vif.victim_place_worked_involved_sending_girls_overseas;
    }

    build(vif) {
        this.arrangeSomeone.build(vif);
    }

    buildFields(vif) {
        vif.victim_know_details_about_destination = this._knowDetails;
        vif.other_involved_person_in_india = this._otherPersonOrPlaceQ1;
        vif.other_involved_husband_trafficker = this._otherPersonOrPlaceQ2;
        vif.other_involved_someone_met_along_the_way = this._otherPersonOrPlaceQ3;
        vif.other_involved_someone_involved_in_trafficking = this._otherPersonOrPlaceQ4;
        vif.other_involved_place_involved_in_trafficking = this._otherPersonOrPlaceQ5;
        vif.victim_has_worked_in_sex_industry = this._sexIndustry;
        vif.victim_place_worked_involved_sending_girls_overseas = this._workSendingGirlsOverseas;
    }

    get knowDetails() {
        return this._knowDetails;
    }

    set knowDetails(value) {
        if(value) {
            this._knowDetails = value;
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