export default class MotiveBuilder {
    constructor(vif = null) {
        if(vif == null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._supportMyself = false;
        this._supportFamily = false;
        this._personalDebt = false;
        this._familyDebt = false;
        this._loveMarriage = false;
        this._badHomeMarriage = false;
        this._education = false;
        this._tourTravel = false;
        this._didntKnow = false;
        this._other = false;
    }

    setValues(vif) {
        this._supportMyself = vif.primary_motivation_support_myself;
        this._supportFamily = vif.primary_motivation_support_family;
        this._personalDebt = vif.primary_motivation_personal_debt;
        this._familyDebt = vif.primary_motivation_family_debt;
        this._loveMarriage = vif.primary_motivation_love_marriage;
        this._badHomeMarriage = vif.primary_motivation_bad_home_marriage; 
        this._education = vif.primary_motivation_get_education;
        this._tourTravel = vif.primary_motivation_tour_travel;
        this._didntKnow = vif.primary_motivation_didnt_know;
        this._other = vif.primary_motivation_other;
        this._otherText = vif.primary_motivation_other_value;
    }

    build(vif) {
        vif.primary_motivation_support_myself = this._supportMyself;
        vif.primary_motivation_support_family = this._supportFamily;
        vif.primary_motivation_personal_debt = this._personalDebt;
        vif.primary_motivation_family_debt = this._familyDebt;
        vif.primary_motivation_love_marriage = this._loveMarriage;
        vif.primary_motivation_bad_home_marriage = this._badHomeMarriage; 
        vif.primary_motivation_get_education = this._education;
        vif.primary_motivation_tour_travel = this._tourTravel;
        vif.primary_motivation_didnt_know = this._didntKnow;
        vif.primary_motivation_other = this._other;
        vif.primary_motivation_other_value = this._otherText;
    }
    
    get supportMyself() {
        return this._supportMyself;
    }
    
    set supportMyself(value) {
        this.clearAll();
        this._supportMyself = value;
    }
    
    get supportFamily() {
        return this._supportFamily;
    }
    
    set supportFamily(value) {
        this.clearAll();
        this._supportFamily = value;
    }
    
    get personalDebt() {
        return this._personalDebt;
    }
    
    set personalDebt(value) {
        this.clearAll();
        this._personalDebt = value;
    }
    
    get familyDebt() {
        return this._familyDebt;
    }
    
    set familyDebt(value) {
        this.clearAll();
        this._familyDebt = value;
    }
    
    get loveMarriage() {
        return this._loveMarriage;
    }
    
    set loveMarriage(value) {
        this.clearAll();
        this._loveMarriage = value;
    }
    
    get badHomeMarriage() {
        return this._badHomeMarriage;
    }
    
    set badHomeMarriage(value) {
        this.clearAll();
        this._badHomeMarriage = value;
    }
    
    get education() {
        return this._education;
    }
    
    set education(value) {
        this.clearAll();
        this._education = value;
    }
    
    get tourTravel() {
        return this._tourTravel;
    }
    
    set tourTravel(value) {
        this.clearAll();
        this._tourTravel = value;
    }
    
    get didntKnow() {
        return this._didntKnow;
    }
    
    set didntKnow(value) {
        this.clearAll();
        this._didntKnow = value;
    }
    
    get other() {
        return this._other;
    }
    
    set other(value) {
        this.clearAll();
        this._other = value;
    }
    
    get otherText() {
        return this._otherText;
    }
    
    set otherText(value) {
        this._otherText = value;
    }
}