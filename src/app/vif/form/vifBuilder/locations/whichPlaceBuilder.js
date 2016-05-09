export default class WhichPlaceBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._indiaMeetPoint = false;
        this._manpower = false;
        this._transitHideout = false;
        this._destination = false;
        this._passport = false;
        this._nepalMeetPoint = false;
        this._knownLocation = false;
        this._sexIndustry = false;
    }

    setValues(vif) {
        this._indiaMeetPoint = vif.location.which_place_india_meetpoint;
        this._manpower = vif.location.which_place_manpower;
        this._transitHideout = vif.location.which_place_transit_hideout;
        this._destination = vif.location.which_place_destination;
        this._passport = vif.location.which_place_passport;
        this._nepalMeetPoint = vif.location.which_place_nepal_meet_point;
        this._knownLocation = vif.location.which_place_known_location;
        this._sexIndustry = vif.location.which_place_sex_industry;
    }

    build(vif = {}) {
        vif.location.which_place_india_meetpoint = this._indiaMeetPoint;
        vif.location.which_place_manpower = this._manpower;
        vif.location.which_place_transit_hideout = this._transitHideout;
        vif.location.which_place_destination = this._destination;
        vif.location.which_place_passport = this._passport;
        vif.location.which_place_nepal_meet_point = this._nepalMeetPoint;
        vif.location.which_place_known_location = this._knownLocation;
        vif.location.which_place_sex_industry = this._sexIndustry;
        return vif;
    }

    get indiaMeetPoint() {
        return this._indiaMeetPoint;
    }

    set indiaMeetPoint(value) {
        this.clearAll();
        this._indiaMeetPoint = value;
    }

    get manpower() {
        return this._manpower;
    }

    set manpower(value) {
        this.clearAll();
        this._manpower = value;
    }

    get transitHideout() {
        return this._transitHideout;
    }

    set transitHideout(value) {
        this.clearAll();
        this._transitHideout = value;
    }

    get destination() {
        return this._destination;
    }

    set destination(value) {
        this.clearAll();
        this._destination = value;
    }

    get passport() {
        return this._passport;
    }

    set passport(value) {
        this.clearAll();
        this._passport = value;
    }

    get nepalMeetPoint() {
        return this._nepalMeetPoint;
    }

    set nepalMeetPoint(value) {
        this.clearAll();
        this._nepalMeetPoint = value;
    }

    get knownLocation() {
        return this._knownLocation;
    }

    set knownLocation(value) {
        this.clearAll();
        this._knownLocation = value;
    }

    get sexIndustry() {
        return this._sexIndustry;
    }

    set sexIndustry(value) {
        this.clearAll();
        this._sexIndustry = value;
    }
}