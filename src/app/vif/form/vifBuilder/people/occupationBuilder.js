export default class OccupationBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this._otherText = '';
            this.setValues(vif);
        }
    }

    clearAll() {
        this._none = false;
        this._agent = false;
        this._businessOwner = false;
        this._wageLaborer = false;
        this._jobIndia = false;
        this._jobGulf = false;
        this._farmer = false;
        this._teacher = false;
        this._police = false;
        this._army = false;
        this._guard = false;
        this._cook = false;
        this._driver = false;
        this._other = false;
    }

    setValues(vif) {
        this._none = vif.persons.occupation_none;
        this._agent = vif.persons.occupation_agent;
        this._businessOwner = vif.persons.occupation_business_owner;
        this._wageLaborer = vif.persons.occupation_wage_labor;
        this._jobIndia = vif.persons.occupation_job_in_india;
        this._jobGulf = vif.persons.occupation_job_in_gulf;
        this._farmer = vif.persons.occupation_farmer;
        this._teacher = vif.persons.occupation_teacher;
        this._police = vif.persons.occupation_police;
        this._army = vif.persons.occupation_army;
        this._guard = vif.persons.occupation_guard;
        this._cook = vif.persons.occupation_cook;
        this._driver = vif.persons.occupation_driver;
        this._other = vif.persons.occupation_other;
        this._otherText = vif.persons.occupation_other_value;
    }

    build(vif = {}) {
        vif.persons.occupation_none = this._none;
        vif.persons.occupation_agent = this._agent;
        vif.persons.occupation_business_owner = this._businessOwner;
        vif.persons.occupation_wage_labor = this._wageLaborer;
        vif.persons.occupation_job_in_india = this._jobIndia;
        vif.persons.occupation_job_in_gulf = this._jobGulf;
        vif.persons.occupation_farmer = this._farmer;
        vif.persons.occupation_teacher = this._teacher;
        vif.persons.occupation_police = this._police;
        vif.persons.occupation_army = this._army;
        vif.persons.occupation_guard = this._guard;
        vif.persons.occupation_cook = this._cook;
        vif.persons.occupation_driver = this._driver;
        vif.persons.occupation_other = this._other;
        vif.persons.occupation_other_value = this._otherText;
        return vif;
    }

    get none() {
        return this._none;
    }

    set none(value) {
        this.clearAll();
        this._none = value;
    }

    get agent() {
        return this._agent;
    }

    set agent(value) {
        this.clearAll();
        this._agent = value;
    }

    get businessOwner() {
        return this._businessOwner;
    }

    set businessOwner(value) {
        this.clearAll();
        this._businessOwner = value;
    }

    get wageLaborer() {
        return this._wageLaborer;
    }

    set wageLaborer(value) {
        this.clearAll();
        this._wageLaborer = value;
    }

    get jobIndia() {
        return this._jobIndia;
    }

    set jobIndia(value) {
        this.clearAll();
        this._jobIndia = value;
    }

    get jobGulf() {
        return this._jobGulf;
    }

    set jobGulf(value) {
        this.clearAll();
        this._jobGulf = value;
    }

    get farmer() {
        return this._farmer;
    }

    set farmer(value) {
        this.clearAll();
        this._farmer = value;
    }

    get teacher() {
        return this._teacher;
    }

    set teacher(value) {
        this.clearAll();
        this._teacher = value;
    }

    get police() {
        return this._police;
    }

    set police(value) {
        this.clearAll();
        this._police = value;
    }

    get army() {
        return this._army;
    }

    set army(value) {
        this.clearAll();
        this._army = value;
    }

    get guard() {
        return this._guard;
    }

    set guard(value) {
        this.clearAll();
        this._guard = value;
    }

    get cook() {
        return this._cook;
    }

    set cook(value) {
        this.clearAll();
        this._cook = value;
    }

    get driver() {
        return this._driver;
    }

    set driver(value) {
        this.clearAll();
        this._driver = value;
    }

    get other() {
        return this._other;
    }

    set other(value) {
        this.clearAll();
        this._other = value;
    }

    get otherValue() {
        return this._otherText;
    }

    set otherValue(value) {
        this.clearAll();
        this._otherText = value;
    }
}