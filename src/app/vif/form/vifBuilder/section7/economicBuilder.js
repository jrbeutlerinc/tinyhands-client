export default class EconomicBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._unable = false;
        this._onlyBasicNeeds = false;
        this._someNonEssential = false;
        this._wealthy = false;
    }

    setValues(vif) {
        this._unable = vif.economic_unable;
        this._onlyBasicNeeds = vif.economic_only_basic_needs;
        this._someNonEssential = vif.economic_some_non_essential;
        this._wealthy = vif.economic_wealthy;
    }

    build(vif) {
        vif.economic_unable = this._unable;
        vif.economic_only_basic_needs = this._onlyBasicNeeds;
        vif.economic_some_non_essential = this._someNonEssential;
        vif.economic_wealthy = this._wealthy;
    }

    get unable() {
        return this._never;
    }

    set unable(value) {
        this.clearAll();
        this._never = value;
    }

    get onlyBasicNeeds() {
        return this._onlyBasicNeeds;
    }

    set onlyBasicNeeds(value) {
        this.clearAll();
        this._onlyBasicNeeds = value;
    }

    get someNonEssential() {
        return this._someNonEssential;
    }

    set someNonEssential(value) {
        this.clearAll();
        this._someNonEssential = value;
    }

    get wealthy() {
        return this._wealthy;
    }

    set wealthy(value) {
        this.clearAll();
        this._wealthy = value;
    }
}