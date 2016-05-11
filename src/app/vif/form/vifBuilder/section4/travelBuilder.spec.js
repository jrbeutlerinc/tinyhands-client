import TravelBuilder from './travelBuilder';

describe('TravelBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new TravelBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.touristBus).toEqual(false);
            expect(builder.motorbike).toEqual(false);
            expect(builder.privateCar).toEqual(false);
            expect(builder.localBus).toEqual(false);
            expect(builder.microbus).toEqual(false);
            expect(builder.plane).toEqual(false);
            expect(builder.other).toEqual(false);
        });

        it('should set text fields to empty string', () => {
            expect(builder.otherText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                victim_primary_means_of_travel_tourist_bus: true,
                victim_primary_means_of_travel_motorbike: true,
                victim_primary_means_of_travel_private_car: true,
                victim_primary_means_of_travel_local_bus: true,
                victim_primary_means_of_travel_microbus: true,
                victim_primary_means_of_travel_plane: true,
                victim_primary_means_of_travel_other: true,
                victim_primary_means_of_travel_other_value: "Foo"
           }

           builder = new TravelBuilder(vif);
        });

        it('should set option values to match vif', () => {
            expect(builder.touristBus).toEqual(vif.victim_primary_means_of_travel_tourist_bus);
            expect(builder.motorbike).toEqual(vif.victim_primary_means_of_travel_motorbike);
            expect(builder.privateCar).toEqual(vif.victim_primary_means_of_travel_private_car);
            expect(builder.localBus).toEqual(vif.victim_primary_means_of_travel_local_bus);
            expect(builder.microbus).toEqual(vif.victim_primary_means_of_travel_microbus);
            expect(builder.plane).toEqual(vif.victim_primary_means_of_travel_plane);
            expect(builder.other).toEqual(vif.victim_primary_means_of_travel_other);
        });

        it('should set text fields to match vif', () => {
            expect(builder.otherText).toEqual(vif.victim_primary_means_of_travel_other_value);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_primary_means_of_travel_tourist_bus: true,
                victim_primary_means_of_travel_motorbike: true,
                victim_primary_means_of_travel_private_car: true,
                victim_primary_means_of_travel_local_bus: true,
                victim_primary_means_of_travel_microbus: true,
                victim_primary_means_of_travel_plane: true,
                victim_primary_means_of_travel_other: true,
                victim_primary_means_of_travel_other_value: "Foo"
           }

           builder = new TravelBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.touristBus).toEqual(builder.touristBus);
            expect(builder.motorbike).toEqual(builder.motorbike);
            expect(builder.privateCar).toEqual(builder.privateCar);
            expect(builder.localBus).toEqual(builder.localBus);
            expect(builder.microbus).toEqual(builder.microbus);
            expect(builder.plane).toEqual(builder.plane);
            expect(builder.other).toEqual(builder.other);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                victim_primary_means_of_travel_tourist_bus: true,
                victim_primary_means_of_travel_motorbike: true,
                victim_primary_means_of_travel_private_car: true,
                victim_primary_means_of_travel_local_bus: true,
                victim_primary_means_of_travel_microbus: true,
                victim_primary_means_of_travel_plane: true,
                victim_primary_means_of_travel_other: true,
                victim_primary_means_of_travel_other_value: "Foo"
           }

           builder = new TravelBuilder(vif);
        });

        describe('touristBus is set to true', () => {
            it('should set all other values to false', () => {
                builder.touristBus = true;

                expect(builder.touristBus).toEqual(true);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('motorbike is set to true', () => {
            it('should set all other values to false', () => {
                builder.motorbike = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(true);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('privateCar is set to true', () => {
            it('should set all other values to false', () => {
                builder.privateCar = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(true);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('localBus is set to true', () => {
            it('should set all other values to false', () => {
                builder.localBus = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(true);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('microbus is set to true', () => {
            it('should set all other values to false', () => {
                builder.microbus = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(true);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('plane is set to true', () => {
            it('should set all other values to false', () => {
                builder.plane = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });

        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;

                expect(builder.touristBus).toEqual(false);
                expect(builder.motorbike).toEqual(false);
                expect(builder.privateCar).toEqual(false);
                expect(builder.localBus).toEqual(false);
                expect(builder.microbus).toEqual(false);
                expect(builder.plane).toEqual(false);
                expect(builder.other).toEqual(true);
            });
        });

        describe('otherText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.otherText = text;

                expect(builder.otherText).toEqual(text);
            });
        });
    });
});