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
        this._unable = vif.family_economic_situation_no_basic_needs;
        this._onlyBasicNeeds = vif.family_economic_situation_difficult_basic_needs;
        this._someNonEssential = vif.family_economic_situation_comfortable_basic_needs;
        this._wealthy = vif.family_economic_situation_wealthy;
    }

    build(vif) {
        vif.family_economic_situation_no_basic_needs = this._unable;
        vif.family_economic_situation_difficult_basic_needs = this._onlyBasicNeeds;
        vif.family_economic_situation_comfortable_basic_needs = this._someNonEssential;
        vif.family_economic_situation_wealthy = this._wealthy;
    }

    get unable() {
        return this._unable;
    }

    set unable(value) {
        this.clearAll();
        this._unable = value;
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