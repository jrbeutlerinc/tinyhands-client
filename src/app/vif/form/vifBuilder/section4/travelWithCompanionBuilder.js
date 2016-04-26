export default class TravelWithCompanionBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._yes = false;
        this._no = false;
        this._brokerTookMeToBorder = false;
    }

    setValues(vif) {
        this._yes = vif.travel_with_companion_yes;
        this._no = vif.travel_with_companion_no;
        this._brokerTookMeToBorder = vif.travel_with_companion_broker_took_me_to_border;
    }

    build(vif) {
        vif.travel_with_companion_yes = this._yes;
        vif.travel_with_companion_no = this._no;
        vif.travel_with_companion_broker_took_me_to_border = this._brokerTookMeToBorder;
    }

    get yes() {
        return this._yes;
    }

    set yes(value) {
        this.clearAll();
        this._yes = value;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this.clearAll();
        this._no = value;
    }

    get brokerTookMeToBorder() {
        return this._brokerTookMeToBorder;
    }

    set brokerTookMeToBorder(value) {
        this.clearAll();
        this._brokerTookMeToBorder = value;
    }
}