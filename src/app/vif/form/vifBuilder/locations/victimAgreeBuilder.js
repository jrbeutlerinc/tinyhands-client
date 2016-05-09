export default class VictimAgreeBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._manyGirls = false;
        this._someGirls = false;
        this._suspect = false;
        this._dontBelieve = false;
    }

    setValues(vif) {
        this._manyGirls = vif.location.victim_believes_trafficked_many_girls;
        this._someGirls = vif.location.victim_believes_trafficked_some_girls;
        this._suspect = vif.location.victim_believes_suspect_used_for_trafficking;
        this._dontBelieve = vif.location.victim_believes_not_used_for_trafficking;
    }

    build(vif = {}) {
        vif.location.victim_believes_trafficked_many_girls = this._manyGirls;
        vif.location.victim_believes_trafficked_some_girls = this._someGirls;
        vif.location.victim_believes_suspect_used_for_trafficking = this._suspect;
        vif.location.victim_believes_not_used_for_trafficking = this._dontBelieve;
        return vif;
    }

    get manyGirls() {
        return this._manyGirls;
    }

    set manyGirls(value) {
        this.clearAll();
        this._manyGirls = value;
    }

    get someGirls() {
        return this._someGirls;
    }

    set someGirls(value) {
        this.clearAll();
        this._someGirls = value;
    }

    get suspect() {
        return this._suspect;
    }

    set suspect(value) {
        this.clearAll();
        this._suspect = value;
    }

    get dontBelieve() {
        return this._dontBelieve;
    }

    set dontBelieve(value) {
        this.clearAll();
        this._dontBelieve = value;
    }
}