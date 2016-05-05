import EconomicBuilder from './economicBuilder';

describe('EconomicBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new EconomicBuilder();
        });

        it('should set all options to false', () => {
            expect(builder.unable).toEqual(false);
            expect(builder.onlyBasicNeeds).toEqual(false);
            expect(builder.someNonEssential).toEqual(false);
            expect(builder.wealthy).toEqual(false);
        });
    });

    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                family_economic_situation_no_basic_needs: true,
                family_economic_situation_difficult_basic_needs: true,
                family_economic_situation_comfortable_basic_needs: true,
                family_economic_situation_wealthy: true
            }

            builder = new EconomicBuilder(vif);
        });

        it('should set alcohol option values to match vif', () => {
            expect(builder.unable).toEqual(vif.family_economic_situation_no_basic_needs);
            expect(builder.onlyBasicNeeds).toEqual(vif.family_economic_situation_difficult_basic_needs);
            expect(builder.someNonEssential).toEqual(vif.family_economic_situation_comfortable_basic_needs);
            expect(builder.wealthy).toEqual(vif.family_economic_situation_wealthy);
        });
    });
    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_guardian_drinks_alcohol_never: true,
                victim_guardian_drinks_alcohol_occasionally: true,
                victim_guardian_drinks_alcohol_all_the_time: true
            }
            builder = new EconomicBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            let builtVif = builder.build();

            expect(builder.unable).toEqual(builder.unable);
            expect(builder.onlyBasicNeeds).toEqual(builder.onlyBasicNeeds);
            expect(builder.someNonEssential).toEqual(builder.someNonEssential);
            expect(builder.wealthy).toEqual(builder.wealthy);
        });
    });
    describe('when', () => {
        beforeEach(() => {
            let vif = {
                family_economic_situation_no_basic_needs: true,
                family_economic_situation_difficult_basic_needs: true,
                family_economic_situation_comfortable_basic_needs: true,
                family_economic_situation_wealthy: true
            }

        });

        describe('unable is set to true', () => {
            it('should set all other values to false', () => {
                builder.unable = true;
                expect(builder.unable).toEqual(true);
                expect(builder.onlyBasicNeeds).toEqual(false);
                expect(builder.someNonEssential).toEqual(false);
                expect(builder.wealthy).toEqual(false);
            });
        });
        describe('onlyBasicNeeds is set to true', () => {
            it('should set all other values to false', () => {
                builder.onlyBasicNeeds = true;
                expect(builder.unable).toEqual(false);
                expect(builder.onlyBasicNeeds).toEqual(true);
                expect(builder.someNonEssential).toEqual(false);
                expect(builder.wealthy).toEqual(false);
            });
        });
        describe('someNonEssential is set to true', () => {
            it('should set all other values to false', () => {
                builder.someNonEssential = true;
                expect(builder.unable).toEqual(false);
                expect(builder.onlyBasicNeeds).toEqual(false);
                expect(builder.someNonEssential).toEqual(true);
                expect(builder.wealthy).toEqual(false);
            });
        });
        describe('wealthy is set to true', () => {
            it('should set all other values to false', () => {
                builder.wealthy = true;
                expect(builder.unable).toEqual(false);
                expect(builder.onlyBasicNeeds).toEqual(false);
                expect(builder.someNonEssential).toEqual(false);
                expect(builder.wealthy).toEqual(true);
            });
        });
    });
});