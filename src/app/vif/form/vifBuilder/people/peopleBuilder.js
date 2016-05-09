import InterviewerBelieveBuilder from './interviewerBelieveBuilder';
import OccupationBuilder from './occupationBuilder';
import PhysicalDescriptionBuilder from './physicalDescriptionBuilder';
import PoliticalPartyBuilder from './politicalPartyBuilder';
import VictimBelieveBuilder from './victimBelieveBuilder';
import WhoIsThisBuilder from './whoIsThisBuilder';

export default class PeopleBuilder {
    constructor(vif = null, interviewerBelieveBuilder = null, occupationBuilder = null, physicalDescriptionBuilder = null,
                politicalPartyBuilder = null, victimBelieveBuilder = null, whoIsThisBuilder = null) {

        this.interviewerBelieve = interviewerBelieveBuilder || new InterviewerBelieveBuilder(vif);
        this.occupation = occupationBuilder || new OccupationBuilder(vif);
        this.physicalDescription = physicalDescriptionBuilder || new PhysicalDescriptionBuilder(vif);
        this.politicalParty = politicalPartyBuilder || new PoliticalPartyBuilder(vif);
        this.victimBelieve = victimBelieveBuilder || new VictimBelieveBuilder(vif);
        this.whoIsThisBuilder = whoIsThisBuilder || new WhoIsThisBuilder(vif);
        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this.people = [1];
        this.persons = {};
        this.name = '';
        this._gender = null;
        this.address1 = null; //FK
        this.address2 = null; //FK
        this.ward = '';
        this.phone = '';
        this.height = null;
        this.weight = null;
        this.numInFamily = null;
    }

    setValues(vif) {
        this.name = vif.persons.victim_name;
        this._gender = vif.persons.victim_gender;
        this.address1 = vif.persons.victim_address1;
        this.address2 = vif.persons.victim_address2;
        this.ward = vif.persons.victim_address_ward;
        this.phone = vif.persons.victim_phone;
        this.age = vif.persons.victim_age;
        this.height = vif.persons.victim_height;
        this.weight = vif.persons.victim_weight;
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
        vif.persons.name = this.name;
        vif.persons.gender = this._gender;
        vif.persons.address1 = this.address1;
        vif.persons.address2 = this.address2;
        vif.persons.ward = this.ward;
        vif.persons.phone = this.phone;
        vif.persons.age = this.age;
        vif.persons.height = this.height;
        vif.persons.weight = this.weight;
    }

    addPersonBox() {
        this.people.push(this.persons);
        this.persons = {};
    }

    get isMale() {
        return this._gender === 'male';
    }

    set isMale(value) {
        if(value) {
            this._gender = 'male';
        }
    }

    get isFemale() {
        return this._gender === 'female';
    }

    set isFemale(value) {
        if(value) {
            this._gender = 'female';
        }
    }
}