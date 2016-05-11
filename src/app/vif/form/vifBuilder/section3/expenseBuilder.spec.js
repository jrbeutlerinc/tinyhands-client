import ExpenseBuilder from './expenseBuilder';

describe('ExpenseBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new ExpenseBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.allMyself).toEqual(false);
            expect(builder.allBroker).toEqual(false);
            expect(builder.sumToBroker).toEqual(false);
            expect(builder.payBrokerBack).toEqual(false);
        });

        it('should set amountText to empty string', () => {
            expect(builder.amountText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                victim_how_expense_was_paid_paid_myself: true,
                victim_how_expense_was_paid_broker_paid_all: true,
                victim_how_expense_was_paid_gave_money_to_broker: true,
                victim_how_expense_was_paid_broker_gave_loan: true,
                victim_how_expense_was_paid_amount: "Foo"
           }

           builder = new ExpenseBuilder(vif);
        });

        it('should set expense option values to match vif', () => {
            expect(builder.allMyself).toEqual(vif.victim_how_expense_was_paid_paid_myself);
            expect(builder.allBroker).toEqual(vif.victim_how_expense_was_paid_broker_paid_all);
            expect(builder.sumToBroker).toEqual(vif.victim_how_expense_was_paid_gave_money_to_broker);
            expect(builder.payBrokerBack).toEqual(vif.victim_how_expense_was_paid_broker_gave_loan);
        });

        it('should set amount text to match vif', () => {
            expect(builder.amountText).toEqual(vif.victim_how_expense_was_paid_amount);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_how_expense_was_paid_paid_myself: true,
                victim_how_expense_was_paid_broker_paid_all: true,
                victim_how_expense_was_paid_gave_money_to_broker: true,
                victim_how_expense_was_paid_broker_gave_loan: true,
                victim_how_expense_was_paid_amount: "Foo"
           }

           builder = new ExpenseBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.allMyself).toEqual(builder.allMyself);
            expect(builder.allBroker).toEqual(builder.allBroker);
            expect(builder.sumToBroker).toEqual(builder.sumToBroker);
            expect(builder.payBrokerBack).toEqual(builder.payBrokerBack);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                victim_how_expense_was_paid_paid_myself: true,
                victim_how_expense_was_paid_broker_paid_all: true,
                victim_how_expense_was_paid_gave_money_to_broker: true,
                victim_how_expense_was_paid_broker_gave_loan: true,
                victim_how_expense_was_paid_amount: "Foo"
           }

           builder = new ExpenseBuilder(vif);
        });

        describe('allMyself is set to true', () => {
            it('should set all other values to false', () => {
                builder.allMyself = true;

                expect(builder.allMyself).toEqual(true);
                expect(builder.allBroker).toEqual(false);
                expect(builder.sumToBroker).toEqual(false);
                expect(builder.payBrokerBack).toEqual(false);
            });
        });

        describe('allBroker is set to true', () => {
            it('should set all other values to false', () => {
                builder.allBroker = true;

                expect(builder.allMyself).toEqual(false);
                expect(builder.allBroker).toEqual(true);
                expect(builder.sumToBroker).toEqual(false);
                expect(builder.payBrokerBack).toEqual(false);
            });
        });

        describe('sumToBroker is set to true', () => {
            it('should set all other values to false', () => {
                builder.sumToBroker = true;

                expect(builder.allMyself).toEqual(false);
                expect(builder.allBroker).toEqual(false);
                expect(builder.sumToBroker).toEqual(true);
                expect(builder.payBrokerBack).toEqual(false);
            });
        });

        describe('payBrokerBack is set to true', () => {
            it('should set all other values to false', () => {
                builder.payBrokerBack = true;

                expect(builder.allMyself).toEqual(false);
                expect(builder.allBroker).toEqual(false);
                expect(builder.sumToBroker).toEqual(false);
                expect(builder.payBrokerBack).toEqual(true);
            });
        });

        describe('amountText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.amountText = text;

                expect(builder.amountText).toEqual(text);
            });
        });
    });
});