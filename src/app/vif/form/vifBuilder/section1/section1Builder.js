import CasteBuilder from './casteBuilder';
import OccuptionBuilder from './occupationBuilder';
import MaritalStatusBuilder from './maritalStatusBuilder';
import LivesWithBuilder from './livesWithBuilder';
import PrimaryGuardianBuilder from './primaryGuardianBuilder';
import ParentMaritalStatusBuilder from './parentMaritalStatusBuilder';
import EducationLevelBuilder from './educationLevelBuilder';
import IsLiterateBuilder from './isLiterateBuilder';

export default class Section1Builder {
    
    constructor(vif = null, casteBuilder = null, occupationBuilder = null, maritalStatusBuilder = null, livesWithBuilder = null, primaryGuardianBuilder = null,
        parentMaritalStatusBuilder = null, educationLevelBuilder = null, literacyBuilder = null) {
            
        this.caste = casteBuilder || new CasteBuilder(vif);
        this.occupation = occupationBuilder || new OccuptionBuilder(vif);
        this.maritalStatus = maritalStatusBuilder || new MaritalStatusBuilder(vif);
        this.livesWith = livesWithBuilder || new LivesWithBuilder(vif);
        this.primaryGuardian = primaryGuardianBuilder || new PrimaryGuardianBuilder(vif);
        this.parentMaritalStatus = parentMaritalStatusBuilder || new ParentMaritalStatusBuilder(vif);
        this.educationLevel = educationLevelBuilder || new EducationLevelBuilder(vif);
        this.literacy = literacyBuilder || new IsLiterateBuilder(vif);
        if(vif == null) {
            this.setDefaultValues();
        }else {
            this.setValues(vif);
        }
    }
    
    setDefaultValues() {
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
        this.name = vif.victim_name;
        this._gender = vif.victim_gender;
        this.address1 = vif.victim_address1;
        this.address2 = vif.victim_address2;
        this.ward = vif.victim_address_ward;
        this.phone = vif.victim_phone;
        this.age = vif.victim_age;
        this.height = vif.victim_height;
        this.weight = vif.victim_weight;
        this.numInFamily = vif.victim_num_in_family;
    }
    
    build(vif) {
        this.caste.build(vif);
        this.occupation.build(vif);
        this.maritalStatus.build(vif);
        this.livesWith.build(vif);
        this.primaryGuardian.build(vif);
        this.parentMaritalStatus.build(vif);
        this.educationLevel.build(vif);
        this.literacy.build(vif);
        this.buildFields(vif);
    }
    
    buildFields(vif) {
        vif.victim_name = this.name;
        vif.victim_gender = this._gender;
        vif.victim_address1 = this.address1;
        vif.victim_address2 = this.address2;
        vif.victim_address_ward = this.ward;
        vif.victim_phone = this.phone;
        vif.victim_age = this.age;
        vif.victim_height = this.height;
        vif.victim_weight = this.weight;
        vif.victim_num_in_family = this.numInFamily;
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