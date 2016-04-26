export default class PrimaryGuardianBuilder {
    constructor(vif = null) {
        if(vif == null) {
            this.clearAll();
            this.address1 = null; //FK
            this.address2 = null; //FK
            this.ward = null;
            this.phoneNumber = null;
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._parents = false;
        this._husband = false;
        this._otherRelative = false;
        this._nonRelative = false;
        this._noOne = false;
        
    }

    setValues(vif) {
        this._parents = vif.victim_primary_guardian_own_parents;
        this._husband = vif.victim_primary_guardian_husband;
        this._otherRelative = vif.victim_primary_guardian_other_relative;
        this._nonRelative = vif.victim_primary_guardian_non_relative;
        this._noOne = vif.victim_primary_guardian_no_one;
        this.address1 = vif.victim_guardian_address1;
        this.address2 = vif.victim_guardian_address2;
        this.ward = vif.victim_guardian_address_ward;
        this.phoneNumber = vif.victim_guardian_phone;
    }

    build(vif = {}) {
        vif.victim_primary_guardian_own_parents = this._parents;
        vif.victim_primary_guardian_husband = this._husband;
        vif.victim_primary_guardian_other_relative = this._otherRelative;
        vif.victim_primary_guardian_non_relative = this._nonRelative;
        vif.victim_primary_guardian_no_one = this._noOne;
        vif.victim_guardian_address1 = this.address1;
        vif.victim_guardian_address2 = this.address2;
        vif.victim_guardian_address_ward = this.ward;
        vif.victim_guardian_phone = this.phoneNumber;
        return vif;
    }
    
    get parents() {
        return this._parents;
    }
    
    set parents(value) {
        this.clearAll();
        this._parents = value;
    }

    get husband() {
        return this._husband;
    }
    
    set husband(value) {
        this.clearAll();
        this._husband = value;
    }
    
    get otherRelative() {
        return this._otherRelative;
    }
    
    set otherRelative(value) {
        this.clearAll();
        this._otherRelative = value;
    }
    
    get nonRelative() {
        return this._nonRelative;
    }
    
    set nonRelative(value) {
        this.clearAll();
        this._nonRelative = value;
    }
    
    get noOne() {
        return this._noOne;
    }
    
    set noOne(value) {
        this.clearAll();
        this._noOne = value;
    }
}