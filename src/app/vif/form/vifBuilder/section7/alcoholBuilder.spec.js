import AlcoholBuilder from './alcoholBuilder';

describe('AlcoholBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new AlcoholBuilder();
        });

        it('should set all options to false', () => {
            expect(builder.never).toEqual(false);
            expect(builder.occasionally).toEqual(false);
            expect(builder.allTheTime).toEqual(false);
        });
    });

    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                victim_guardian_drinks_alcohol_never: true,
                victim_guardian_drinks_alcohol_occasionally: true,
                victim_guardian_drinks_alcohol_all_the_time: true
            }

            builder = new AlcoholBuilder(vif);
        });

        it('should set alcohol option values to match vif', () => {
            expect(builder.never).toEqual(vif.victim_guardian_drinks_alcohol_never);
            expect(builder.occasionally).toEqual(vif.victim_guardian_drinks_alcohol_occasionally);
            expect(builder.allTheTime).toEqual(vif.victim_guardian_drinks_alcohol_all_the_time);
        });
    });
    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_guardian_drinks_alcohol_never: true,
                victim_guardian_drinks_alcohol_occasionally: true,
                victim_guardian_drinks_alcohol_all_the_time: true
            }
            builder = new AlcoholBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            let builtVif = builder.build();

            expect(builder.never).toEqual(builder.never);
            expect(builder.occasionally).toEqual(builder.occasionally);
            expect(builder.allTheTime).toEqual(builder.allTheTime);
        });
    });
    describe('when', () => {
        beforeEach(() => {
            let vif = {
                victim_guardian_drinks_alcohol_never: true,
                victim_guardian_drinks_alcohol_occasionally: true,
                victim_guardian_drinks_alcohol_all_the_time: true
            }

        });

        describe('never is set to true', () => {
            it('should set all other values to false', () => {
                builder.never = true;
                expect(builder.never).toEqual(true);
                expect(builder.occasionally).toEqual(false);
                expect(builder.allTheTime).toEqual(false);
            });
        });
        describe('occasionally is set to true', () => {
            it('should set all other values to false', () => {
                builder.occasionally = true;
                expect(builder.never).toEqual(false);
                expect(builder.occasionally).toEqual(true);
                expect(builder.allTheTime).toEqual(false);
            });
        });
        describe('allTheTime is set to true', () => {
            it('should set all other values to false', () => {
                builder.allTheTime = true;
                expect(builder.never).toEqual(false);
                expect(builder.occasionally).toEqual(false);
                expect(builder.allTheTime).toEqual(true);
            });
        });
    });
});