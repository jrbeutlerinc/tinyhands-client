import EventsBuilder from './eventsBuilder';

describe('EventsBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new EventsBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.sexualHarassment).toEqual(false);
            expect(builder.sexualAbuse).toEqual(false);
            expect(builder.physicalAbuse).toEqual(false);
            expect(builder.threats).toEqual(false);
            expect(builder.deniedProperFood).toEqual(false);
            expect(builder.forcedToTakeDrugs).toEqual(false);
        });

        it('should set text fields to empty string', () => {
            expect(builder.byWhomText).toEqual('');
            expect(builder.explainText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                abuse_happened_sexual_harassment: true,
                abuse_happened_sexual_abuse: true,
                abuse_happened_physical_abuse: true,
                abuse_happened_sexual_threats: true,
                abuse_happened_denied_proper_food: true,
                abuse_happened_forced_to_take_drugs: true,
                abuse_happened_by_whom: "Foo",
                abuse_happened_explanation: "Foo"
           }

           builder = new EventsBuilder(vif);
        });

        it('should set expense option values to match vif', () => {
            expect(builder.sexualHarassment).toEqual(vif.abuse_happened_sexual_harassment);
            expect(builder.sexualAbuse).toEqual(vif.abuse_happened_sexual_abuse);
            expect(builder.physicalAbuse).toEqual(vif.abuse_happened_physical_abuse);
            expect(builder.threats).toEqual(vif.abuse_happened_sexual_threats);
            expect(builder.deniedProperFood).toEqual(vif.abuse_happened_denied_proper_food);
            expect(builder.forcedToTakeDrugs).toEqual(vif.abuse_happened_forced_to_take_drugs);
        });

        it('should set text fields to match vif', () => {
            expect(builder.byWhomText).toEqual(vif.abuse_happened_by_whom);
            expect(builder.explainText).toEqual(vif.abuse_happened_explanation);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                abuse_happened_sexual_harassment: true,
                abuse_happened_sexual_abuse: true,
                abuse_happened_physical_abuse: true,
                abuse_happened_sexual_threats: true,
                abuse_happened_denied_proper_food: true,
                abuse_happened_forced_to_take_drugs: true,
                abuse_happened_by_whom: "Foo",
                abuse_happened_explanation: "Foo"
           }

           builder = new EventsBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.sexualHarassment).toEqual(builder.sexualHarassment);
            expect(builder.sexualAbuse).toEqual(builder.sexualAbuse);
            expect(builder.physicalAbuse).toEqual(builder.physicalAbuse);
            expect(builder.threats).toEqual(builder.threats);
            expect(builder.deniedProperFood).toEqual(builder.deniedProperFood);
            expect(builder.forcedToTakeDrugs).toEqual(builder.forcedToTakeDrugs);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                abuse_happened_sexual_harassment: true,
                abuse_happened_sexual_abuse: true,
                abuse_happened_physical_abuse: true,
                abuse_happened_sexual_threats: true,
                abuse_happened_denied_proper_food: true,
                abuse_happened_forced_to_take_drugs: true,
                abuse_happened_by_whom: "Foo",
                abuse_happened_explanation: "Foo"
           }

           builder = new EventsBuilder(vif);
        });

        describe('sexualHarassment is set to true', () => {
            it('should set all other values to false', () => {
                builder.sexualHarassment = true;

                expect(builder.sexualHarassment).toEqual(true);
                expect(builder.sexualAbuse).toEqual(false);
                expect(builder.physicalAbuse).toEqual(false);
                expect(builder.threats).toEqual(false);
                expect(builder.deniedProperFood).toEqual(false);
                expect(builder.forcedToTakeDrugs).toEqual(false);
            });
        });

        describe('sexualAbuse is set to true', () => {
            it('should set all other values to false', () => {
                builder.sexualAbuse = true;

                expect(builder.sexualHarassment).toEqual(false);
                expect(builder.sexualAbuse).toEqual(true);
                expect(builder.physicalAbuse).toEqual(false);
                expect(builder.threats).toEqual(false);
                expect(builder.deniedProperFood).toEqual(false);
                expect(builder.forcedToTakeDrugs).toEqual(false);
            });
        });

        describe('physicalAbuse is set to true', () => {
            it('should set all other values to false', () => {
                builder.physicalAbuse = true;

                expect(builder.sexualHarassment).toEqual(false);
                expect(builder.sexualAbuse).toEqual(false);
                expect(builder.physicalAbuse).toEqual(true);
                expect(builder.threats).toEqual(false);
                expect(builder.deniedProperFood).toEqual(false);
                expect(builder.forcedToTakeDrugs).toEqual(false);
            });
        });

        describe('threats is set to true', () => {
            it('should set all other values to false', () => {
                builder.threats = true;

                expect(builder.sexualHarassment).toEqual(false);
                expect(builder.sexualAbuse).toEqual(false);
                expect(builder.physicalAbuse).toEqual(false);
                expect(builder.threats).toEqual(true);
                expect(builder.deniedProperFood).toEqual(false);
                expect(builder.forcedToTakeDrugs).toEqual(false);
            });
        });

        describe('deniedProperFood is set to true', () => {
            it('should set all other values to false', () => {
                builder.deniedProperFood = true;

                expect(builder.sexualHarassment).toEqual(false);
                expect(builder.sexualAbuse).toEqual(false);
                expect(builder.physicalAbuse).toEqual(false);
                expect(builder.threats).toEqual(false);
                expect(builder.deniedProperFood).toEqual(true);
                expect(builder.forcedToTakeDrugs).toEqual(false);
            });
        });

        describe('forcedToTakeDrugs is set to true', () => {
            it('should set all other values to false', () => {
                builder.forcedToTakeDrugs = true;

                expect(builder.sexualHarassment).toEqual(false);
                expect(builder.sexualAbuse).toEqual(false);
                expect(builder.physicalAbuse).toEqual(false);
                expect(builder.threats).toEqual(false);
                expect(builder.deniedProperFood).toEqual(false);
                expect(builder.forcedToTakeDrugs).toEqual(true);
            });
        });

        describe('byWhomText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.byWhomText = text;

                expect(builder.byWhomText).toEqual(text);
            });
        });

        describe('explainText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.explainText = text;

                expect(builder.explainText).toEqual(text);
            });
        });
    });
});