export default class ExpenseBuilder {
    constructor(vif = null) {
        if(vif == null) {
            this.clearAll();
            this._amountText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._allMyself = false;
        this._allBroker = false;
        this._sumToBroker = false;
        this._payBrokerBack = false;
    }

    setValues(vif) {
        this._allMyself = vif.expense_all_myself;
        this._allBroker = vif.expense_all_broker;
        this._sumToBroker = vif.expense_sum_to_broker;
        this._payBrokerBack = vif.expense_pay_broker_back;
    }

    build(vif) {
        vif.expense_all_myself = this._allMyself;
        vif.expense_all_broker = this._allBroker;
        vif.expense_sum_to_broker = this._sumToBroker;
        vif.expense_pay_broker_back = this._payBrokerBack;
        vif.broker_relation_amount_value = this._amountText;
    }

    get allMyself() {
        return this._allMyself;
    }

    set allMyself(value) {
        this.clearAll();
        this._allMyself = value;
    }

    get allBroker() {
        return this._allBroker;
    }

    set allBroker(value) {
        this.clearAll();
        this._allBroker = value;
    }

    get sumToBroker() {
        return this._sumToBroker;
    }

    set sumToBroker(value) {
        this.clearAll();
        this._sumToBroker = value;
    }

    get payBrokerBack() {
        return this._payBrokerBack;
    }

    set payBrokerBack(value) {
        this.clearAll();
        this._payBrokerBack = value;
    }

    get amountText() {
        return this._amountText;
    }

    set amountText(value) {
        this._amountText = value;
    }
}