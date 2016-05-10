import Section5Builder from './section5Builder';

describe('Section5Builder', () => {

    let builder;

    describe('when no vif given in constructor', () => {

        beforeEach(() => {
            builder = new Section5Builder();
        });

        it('should set knowDetails to null', () => {
            expect(builder.knowDetails).toEqual(null);
        });

        it('should set otherPersonOrPlaceQ1 to null', () => {
            expect(builder.otherPersonOrPlaceQ1).toEqual(null);
        });

        it('should set otherPersonOrPlaceQ2 to null', () => {
            expect(builder.otherPersonOrPlaceQ2).toEqual(null)
        });

        it('should set otherPersonOrPlaceQ3 to null', () => {
            expect(builder.otherPersonOrPlaceQ3).toEqual(null);
        });

        it('should set otherPersonOrPlaceQ4 to null', () => {
            expect(builder.otherPersonOrPlaceQ4).toEqual(null);
        });

        it('should set otherPersonOrPlaceQ5 to null', () => {
            expect(builder.otherPersonOrPlaceQ5).toEqual(null);
        });

        it('should set sexIndustry to null', () => {
            expect(builder.sexIndustry).toEqual(null);
        });

        it('should set workSendingGirlsOverseas to null', () => {
            expect(builder.workSendingGirlsOverseas).toEqual(null);
        });
    });

    describe('when vif passed in constructor', () => {
        let builder, vif;

        beforeEach(() => {
            vif = {
                victim_know_details_about_destination: false,
                other_involved_person_in_india: false,
                other_involved_husband_trafficker: false,
                other_involved_someone_met_along_the_way: false,
                other_involved_someone_involved_in_trafficking: false,
                other_involved_place_involved_in_trafficking: false,
                victim_has_worked_in_sex_industry: false,
                victim_place_worked_involved_sending_girls_overseas: false
            }
            builder = new Section5Builder(vif);
        });

        it('should set knowDetails to equal vif.victim_name', () => {
            expect(builder.knowDetails).toEqual(vif.victim_know_details_about_destination);
        });

        it('should set otherPersonOrPlaceQ1 to equal vif.victim_gender', () => {
            expect(builder.otherPersonOrPlaceQ1).toEqual(vif.other_involved_person_in_india);
        });

        it('should set otherPersonOrPlaceQ2 to equal vif.victim_address1', () => {
            expect(builder.otherPersonOrPlaceQ2).toEqual(vif.other_involved_husband_trafficker);
        });

        it('should set otherPersonOrPlaceQ3 to equal vif.victim_address2', () => {
            expect(builder.otherPersonOrPlaceQ3).toEqual(vif.other_involved_someone_met_along_the_way);
        });

        it('should set otherPersonOrPlaceQ4 to equal vif.victim_address_ward', () => {
            expect(builder.otherPersonOrPlaceQ4).toEqual(vif.other_involved_someone_involved_in_trafficking);
        });

        it('should set otherPersonOrPlaceQ5 to equal vif.victim_phone', () => {
            expect(builder.otherPersonOrPlaceQ5).toEqual(vif.other_involved_place_involved_in_trafficking);
        });

        it('should set sexIndustry to equal vif.victim_age', () => {
            expect(builder.sexIndustry).toEqual(vif.victim_has_worked_in_sex_industry);
        });

        it('should set workSendingGirlsOverseas to equal vif.victim_height', () => {
            expect(builder.workSendingGirlsOverseas).toEqual(vif.victim_place_worked_involved_sending_girls_overseas);
        });
    });

    describe('build', () => {

        let builder,
            vif,
            arrangeSomeoneBuilder,
            builtVif;

        beforeAll(() => {
            vif = {
                victim_know_details_about_destination: false,
                other_involved_person_in_india: false,
                other_involved_husband_trafficker: false,
                other_involved_someone_met_along_the_way: false,
                other_involved_someone_involved_in_trafficking: false,
                other_involved_place_involved_in_trafficking: false,
                victim_has_worked_in_sex_industry: false,
                victim_place_worked_involved_sending_girls_overseas: false
            }
            arrangeSomeoneBuilder = new jasmine.createSpyObj('arrangeSomeoneBuilder', ['build']);

            builder = new Section5Builder(vif, arrangeSomeoneBuilder);
        });

        it('should call build on arrangeSomeoneBuilder', () => {
            builder.build();

            expect(arrangeSomeoneBuilder.build).toHaveBeenCalled();
        });

        it('should set victim_know_details_about_destination on vif', () => {
            builtVif = builder.build();

            expect(builtVif.victim_know_details_about_destination).toEqual(vif.victim_know_details_about_destination);
        });

        it('should set other_involved_person_in_india on vif', () => {
            builtVif = builder.build();

            expect(builtVif.other_involved_person_in_india).toEqual(vif.other_involved_person_in_india);
        });

        it('should set other_involved_husband_trafficker on vif', () => {
            builtVif = builder.build();

            expect(builtVif.other_involved_husband_trafficker).toEqual(vif.other_involved_husband_trafficker);
        });

        it('should set other_involved_someone_met_along_the_way on vif', () => {
            builtVif = builder.build();

            expect(builtVif.other_involved_someone_met_along_the_way).toEqual(vif.other_involved_someone_met_along_the_way);
        });

        it('should set other_involved_someone_involved_in_trafficking on vif', () => {
            builtVif = builder.build();

            expect(builtVif.other_involved_someone_involved_in_trafficking).toEqual(vif.other_involved_someone_involved_in_trafficking);
        });

        it('should set other_involved_place_involved_in_trafficking on vif', () => {
            builtVif = builder.build();

            expect(builtVif.other_involved_place_involved_in_trafficking).toEqual(vif.other_involved_place_involved_in_trafficking);
        });

        it('should set victim_has_worked_in_sex_industry on vif', () => {
            builtVif = builder.build();

            expect(builtVif.victim_has_worked_in_sex_industry).toEqual(vif.victim_has_worked_in_sex_industry);
        });

        it('should set victim_place_worked_involved_sending_girls_overseas on vif', () => {
            builtVif = builder.build();

            expect(builtVif.victim_place_worked_involved_sending_girls_overseas).toEqual(vif.victim_place_worked_involved_sending_girls_overseas);
        });
    });
});