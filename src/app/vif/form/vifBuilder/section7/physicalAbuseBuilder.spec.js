import PhysicalAbuseBuilder from './physicalAbuseBuilder';

describe('EmotionalAbuseBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new PhysicalAbuseBuilder();
        });

        it('should set all options to false', () => {
            expect(builder.never).toEqual(false);
            expect(builder.rarely).toEqual(false);
            expect(builder.frequent).toEqual(false);
        });
    });

    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                home_had_physical_abuse_never: true,
                home_had_physical_abuse_rarely: true,
                home_had_physical_abuse_frequently: true
            }

            builder = new PhysicalAbuseBuilder(vif);
        });

        it('should set physicalAbuse option values to match vif', () => {
            expect(builder.never).toEqual(vif.home_had_physical_abuse_never);
            expect(builder.rarely).toEqual(vif.home_had_physical_abuse_rarely);
            expect(builder.frequent).toEqual(vif.home_had_physical_abuse_frequently);
        });
    });
    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                home_had_physical_abuse_never: true,
                home_had_physical_abuse_rarely: true,
                home_had_physical_abuse_frequently: true
            }
            builder = new PhysicalAbuseBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            let builtVif = builder.build();

            expect(builder.never).toEqual(builder.never);
            expect(builder.rarely).toEqual(builder.rarely);
            expect(builder.frequent).toEqual(builder.frequent);
        });
    });
    describe('when', () => {
        beforeEach(() => {
            let vif = {
                home_had_physical_abuse_never: true,
                home_had_physical_abuse_rarely: true,
                home_had_physical_abuse_frequently: true
            }

        });

        describe('never is set to true', () => {
            it('should set all other values to false', () => {
                builder.never = true;
                expect(builder.never).toEqual(true);
                expect(builder.rarely).toEqual(false);
                expect(builder.frequent).toEqual(false);
            });
        });
        describe('rarely is set to true', () => {
            it('should set all other values to false', () => {
                builder.rarely = true;
                expect(builder.never).toEqual(false);
                expect(builder.rarely).toEqual(true);
                expect(builder.frequent).toEqual(false);
            });
        });
        describe('frequent is set to true', () => {
            it('should set all other values to false', () => {
                builder.frequent = true;
                expect(builder.never).toEqual(false);
                expect(builder.rarely).toEqual(false);
                expect(builder.frequent).toEqual(true);
            });
        });
    });
});