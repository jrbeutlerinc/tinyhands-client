export default class PeopleBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this.people = {};
    }

    setValues(vif) {

    }

    build(vif = {}) {
        this.buildFields(vif);
        return vif;
    }

    buildFields(vif) {

    }

    addPersonBox() {

    }
}