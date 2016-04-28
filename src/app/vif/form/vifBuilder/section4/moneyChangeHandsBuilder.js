export default class MoneyChangeHandsBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._no = false;
        this._doNotKnow = false;
        this._gaveMoneyToCompanion = false;
        this._gaveMoneyToBroker = false;
    }

    setValues(vif) {
        this._no = vif.money_changed_hands_broker_companion_no;
        this._doNotKnow = vif.money_changed_hands_broker_companion_dont_know;
        this._gaveMoneyToCompanion = vif.money_changed_hands_broker_companion_broker_gave_money;
        this._gaveMoneyToBroker = vif.money_changed_hands_broker_companion_companion_gave_money;
    }

    build(vif) {
        vif.money_changed_hands_broker_companion_no = this._no;
        vif.money_changed_hands_broker_companion_dont_know = this._doNotKnow;
        vif.money_changed_hands_broker_companion_broker_gave_money = this._gaveMoneyToCompanion;
        vif.money_changed_hands_broker_companion_companion_gave_money = this._gaveMoneyToBroker;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this.clearAll();
        this._no = value;
    }

    get doNotKnow() {
        return this._doNotKnow;
    }

    set doNotKnow(value) {
        this.clearAll();
        this._doNotKnow = value;
    }

    get gaveMoneyToCompanion() {
        return this._gaveMoneyToCompanion;
    }

    set gaveMoneyToCompanion(value) {
        this.clearAll();
        this._gaveMoneyToCompanion = value;
    }

    get gaveMoneyToBroker() {
        return this._gaveMoneyToBroker;
    }

    set gaveMoneyToBroker(value) {
        this.clearAll();
        this._gaveMoneyToBroker = value;
    }
}