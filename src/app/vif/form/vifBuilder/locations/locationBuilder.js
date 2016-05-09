export default class LocationBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this.locations = [];
        this.location = {};
        this.address2 = null;
        this.address1 = null;
        this.signboard = null;
        this.locationInTown = null;
        this.phone = null;
        this.color = null;
        this.numberOfLevels = null;
        this.compoundWall = null;
        this.gateColor = null;
        this.roofType = null;
        this.roofColor = null;
        this.personInCharge = null;
        this.nearbyLandmarks = null;
        this.nearbySignboards = null;
        this._associatedWithPlace = null;
        this.other = null;
    }

    setValues(vif) {
        this.address2 = vif.location.vdc;
        this.address1 = vif.location.district;
        this.signboard = vif.location.signboard;
        this.locationInTown = vif.location.location_in_town;
        this.phone = vif.location.phone;
        this.color = vif.location.color;
        this.numberOfLevels = vif.location.number_of_levels;
        this.compoundWall = vif.location.compound_wall;
        this.gateColor = vif.location.gate_color;
        this.roofType = vif.location.roof_type;
        this.roofColor = vif.location.roof_color;
        this.personInCharge = vif.location.person_in_charge;
        this.nearbyLandmarks = vif.location.nearby_landmarks;
        this.nearbySignboards = vif.location.nearby_signboards;
        this._associatedWithPlace = vif.location.associated_with_person;
        this.other = vif.location.other;
    }

    build(vif = {}) {
        this.interviewerBelieve.build(vif);
        this.occupation.build(vif);
        this.physicalDescription.build(vif);
        this.politicalParty.build(vif);
        this.victimBelieve.build(vif);
        this.whoIsThisBuilder.build(vif);
        this.buildFields(vif);
        return vif;
    }

    buildFields(vif) {
        vif.location.vdc = this.address2;
        vif.location.district = this.address1;
        vif.location.signboard = this.signboard;
        vif.location.location_in_town = this.locationInTown;
        vif.location.phone = this.phone;
        vif.location.color = this.color;
        vif.location.number_of_levels = this.numberOfLevels;
        vif.location.compound_wall = this.compoundWall;
        vif.location.gate_color = this.gateColor;
        vif.location.roof_type = this.roofType;
        vif.location.roof_color = this.roofColor;
        vif.location.person_in_charge = this.personInCharge;
        vif.location.nearby_landmarks = this.nearbyLandmarks;
        vif.location.nearby_signboards = this.nearbySignboards;
        vif.location.associated_with_person = this._associatedWithPlace;
        vif.location.other = this.other;
    }

    addPersonBox() {
        this.locations.push(this.location);
        this.location = {};
    }

    get associatedWithPlace() {
        return this._associatedWithPlace;
    }

    set associatedWithPlace(value) {
        this._associatedWithPlace = value;
    }
}