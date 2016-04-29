export default class ExpenseBuilder {
    constructor(vif = null) {
        if(vif === null) {
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
        this._allMyself = vif.victim_how_expense_was_paid_paid_myself;
        this._allBroker = vif.victim_how_expense_was_paid_broker_paid_all;
        this._sumToBroker = vif.victim_how_expense_was_paid_gave_money_to_broker;
        this._payBrokerBack = vif.victim_how_expense_was_paid_broker_gave_loan;
    }

    build(vif) {
        vif.victim_how_expense_was_paid_paid_myself = this._allMyself;
        vif.victim_how_expense_was_paid_broker_paid_all = this._allBroker;
        vif.victim_how_expense_was_paid_gave_money_to_broker = this._sumToBroker;
        vif.victim_how_expense_was_paid_broker_gave_loan = this._payBrokerBack;
        vif.victim_how_expense_was_paid_amount = this._amountText;
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