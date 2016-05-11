import TravelWithCompanionBuilder from './travelWithCompanionBuilder';

describe('TravelWithCompanionBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new TravelWithCompanionBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.yes).toEqual(false);
            expect(builder.no).toEqual(false);
            expect(builder.brokerTookMeToBorder).toEqual(false);
        });
    });

    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                traveled_with_broker_companion_yes: true,
                traveled_with_broker_companion_no: true,
                traveled_with_broker_companion_broker_took_me_to_border: true
           }

           builder = new TravelWithCompanionBuilder(vif);
        });

        it('should set option values to match vif', () => {
            expect(builder.yes).toEqual(vif.traveled_with_broker_companion_yes);
            expect(builder.no).toEqual(vif.traveled_with_broker_companion_yes);
            expect(builder.brokerTookMeToBorder).toEqual(vif.traveled_with_broker_companion_yes);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                traveled_with_broker_companion_yes: true,
                traveled_with_broker_companion_no: true,
                traveled_with_broker_companion_broker_took_me_to_border: true
           }

           builder = new TravelWithCompanionBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.yes).toEqual(builder.yes);
            expect(builder.no).toEqual(builder.no);
            expect(builder.brokerTookMeToBorder).toEqual(builder.brokerTookMeToBorder);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                traveled_with_broker_companion_yes: true,
                traveled_with_broker_companion_no: true,
                traveled_with_broker_companion_broker_took_me_to_border: true
           }

           builder = new TravelWithCompanionBuilder(vif);
        });

        describe('yes is set to true', () => {
            it('should set all other values to false', () => {
                builder.yes = true;

                expect(builder.yes).toEqual(true);
                expect(builder.no).toEqual(false);
                expect(builder.brokerTookMeToBorder).toEqual(false);
            });
        });

        describe('no is set to true', () => {
            it('should set all other values to false', () => {
                builder.no = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(true);
                expect(builder.brokerTookMeToBorder).toEqual(false);
            });
        });

        describe('brokerTookMeToBorder is set to true', () => {
            it('should set all other values to false', () => {
                builder.brokerTookMeToBorder = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(false);
                expect(builder.brokerTookMeToBorder).toEqual(true);
            });
        });
    });
});
