import MoneyChangeHandsBuilder from './moneyChangeHandsBuilder';

describe('MoneyChangeHandsBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new MoneyChangeHandsBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.no).toEqual(false);
            expect(builder.doNotKnow).toEqual(false);
            expect(builder.gaveMoneyToCompanion).toEqual(false);
            expect(builder.gaveMoneyToBroker).toEqual(false);
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                money_changed_hands_broker_companion_no: true,
                money_changed_hands_broker_companion_dont_know: true,
                money_changed_hands_broker_companion_broker_gave_money: true,
                money_changed_hands_broker_companion_companion_gave_money: true
           }

           builder = new MoneyChangeHandsBuilder(vif);
        });

        it('should set option values to match vif', () => {
            expect(builder.no).toEqual(vif.money_changed_hands_broker_companion_no);
            expect(builder.doNotKnow).toEqual(vif.money_changed_hands_broker_companion_dont_know);
            expect(builder.gaveMoneyToCompanion).toEqual(vif.money_changed_hands_broker_companion_broker_gave_money);
            expect(builder.gaveMoneyToBroker).toEqual(vif.money_changed_hands_broker_companion_companion_gave_money);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                money_changed_hands_broker_companion_no: true,
                money_changed_hands_broker_companion_dont_know: true,
                money_changed_hands_broker_companion_broker_gave_money: true,
                money_changed_hands_broker_companion_companion_gave_money: true
           }

           builder = new MoneyChangeHandsBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.no).toEqual(builder.no);
            expect(builder.doNotKnow).toEqual(builder.doNotKnow);
            expect(builder.gaveMoneyToCompanion).toEqual(builder.gaveMoneyToCompanion);
            expect(builder.gaveMoneyToBroker).toEqual(builder.gaveMoneyToBroker);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                money_changed_hands_broker_companion_no: true,
                money_changed_hands_broker_companion_dont_know: true,
                money_changed_hands_broker_companion_broker_gave_money: true,
                money_changed_hands_broker_companion_companion_gave_money: true
           }

           builder = new MoneyChangeHandsBuilder(vif);
        });

        describe('no is set to true', () => {
            it('should set all other values to false', () => {
                builder.no = true;

                expect(builder.no).toEqual(true);
                expect(builder.doNotKnow).toEqual(false);
                expect(builder.gaveMoneyToCompanion).toEqual(false);
                expect(builder.gaveMoneyToBroker).toEqual(false);
            });
        });

        describe('doNotKnow is set to true', () => {
            it('should set all other values to false', () => {
                builder.doNotKnow = true;

                expect(builder.no).toEqual(false);
                expect(builder.doNotKnow).toEqual(true);
                expect(builder.gaveMoneyToCompanion).toEqual(false);
                expect(builder.gaveMoneyToBroker).toEqual(false);
            });
        });

        describe('gaveMoneyToCompanion is set to true', () => {
            it('should set all other values to false', () => {
                builder.gaveMoneyToCompanion = true;

                expect(builder.no).toEqual(false);
                expect(builder.doNotKnow).toEqual(false);
                expect(builder.gaveMoneyToCompanion).toEqual(true);
                expect(builder.gaveMoneyToBroker).toEqual(false);
            });
        });

        describe('gaveMoneyToBroker is set to true', () => {
            it('should set all other values to false', () => {
                builder.gaveMoneyToBroker = true;

                expect(builder.no).toEqual(false);
                expect(builder.doNotKnow).toEqual(false);
                expect(builder.gaveMoneyToCompanion).toEqual(false);
                expect(builder.gaveMoneyToBroker).toEqual(true);
            });
        });
    });
});