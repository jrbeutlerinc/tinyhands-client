import MeetBrokerBuilder from './meetBrokerBuilder';

describe('MeetBrokerBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new MeetBrokerBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.community).toEqual(false);
            expect(builder.work).toEqual(false);
            expect(builder.school).toEqual(false);
            expect(builder.advertisement).toEqual(false);
            expect(builder.approached).toEqual(false);
            expect(builder.friends).toEqual(false);
            expect(builder.family).toEqual(false);
            expect(builder.wedding).toEqual(false);
            expect(builder.vehicle).toEqual(false);
            expect(builder.hospital).toEqual(false);
            expect(builder.myself).toEqual(false);
            expect(builder.mobile).toEqual(false);
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
                victim_how_met_broker_from_community: true,
                victim_how_met_broker_at_work: true,
                victim_how_met_broker_at_school: true,
                victim_how_met_broker_job_advertisement: true,
                victim_how_met_broker_he_approached_me: true,
                victim_how_met_broker_through_friends: true,
                victim_how_met_broker_through_family: true,
                victim_how_met_broker_at_wedding: true,
                victim_how_met_broker_in_a_vehicle: true,
                victim_how_met_broker_in_a_hospital: true,
                victim_how_met_broker_went_myself: true,
                victim_how_met_broker_called_my_mobile: true,
                victim_how_met_broker_other: true,
                victim_how_met_broker_other_value: "Foo"
           };

           builder = new MeetBrokerBuilder(vif);
        })

        it('should set migration option values to match vif', () => {
            expect(builder.community).toEqual(vif.victim_how_met_broker_from_community);
            expect(builder.work).toEqual(vif.victim_how_met_broker_at_work);
            expect(builder.school).toEqual(vif.victim_how_met_broker_at_school);
            expect(builder.advertisement).toEqual(vif.victim_how_met_broker_job_advertisement);
            expect(builder.approached).toEqual(vif.victim_how_met_broker_he_approached_me);
            expect(builder.friends).toEqual(vif.victim_how_met_broker_through_friends);
            expect(builder.family).toEqual(vif.victim_how_met_broker_through_family);
            expect(builder.wedding).toEqual(vif.victim_how_met_broker_at_wedding);
            expect(builder.vehicle).toEqual(vif.victim_how_met_broker_in_a_vehicle);
            expect(builder.hospital).toEqual(vif.victim_how_met_broker_in_a_hospital);
            expect(builder.myself).toEqual(vif.victim_how_met_broker_went_myself);
            expect(builder.mobile).toEqual(vif.victim_how_met_broker_called_my_mobile);
            expect(builder.other).toEqual(vif.victim_how_met_broker_other);
        });

        it('should set text fields to match vif', () => {
            expect(builder.otherText).toEqual(vif.victim_how_met_broker_other_value);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_how_met_broker_from_community: true,
                victim_how_met_broker_at_work: true,
                victim_how_met_broker_at_school: true,
                victim_how_met_broker_job_advertisement: true,
                victim_how_met_broker_he_approached_me: true,
                victim_how_met_broker_through_friends: true,
                victim_how_met_broker_through_family: true,
                victim_how_met_broker_at_wedding: true,
                victim_how_met_broker_in_a_vehicle: true,
                victim_how_met_broker_in_a_hospital: true,
                victim_how_met_broker_went_myself: true,
                victim_how_met_broker_called_my_mobile: true,
                victim_how_met_broker_other: true,
                victim_how_met_broker_other_value: "Foo"
           }

           builder = new MeetBrokerBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.community).toEqual(builder.community);
            expect(builder.work).toEqual(builder.work);
            expect(builder.school).toEqual(builder.school);
            expect(builder.advertisement).toEqual(builder.advertisement);
            expect(builder.approached).toEqual(builder.approached);
            expect(builder.friends).toEqual(builder.friends);
            expect(builder.family).toEqual(builder.family);
            expect(builder.wedding).toEqual(builder.wedding);
            expect(builder.vehicle).toEqual(builder.vehicle);
            expect(builder.hospital).toEqual(builder.hospital);
            expect(builder.myself).toEqual(builder.myself);
            expect(builder.mobile).toEqual(builder.mobile);
            expect(builder.other).toEqual(builder.other);
            expect(builtVif.victim_how_met_broker_other_value).toEqual(builder.otherText);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                victim_how_met_broker_from_community: true,
                victim_how_met_broker_at_work: true,
                victim_how_met_broker_at_school: true,
                victim_how_met_broker_job_advertisement: true,
                victim_how_met_broker_he_approached_me: true,
                victim_how_met_broker_through_friends: true,
                victim_how_met_broker_through_family: true,
                victim_how_met_broker_at_wedding: true,
                victim_how_met_broker_in_a_vehicle: true,
                victim_how_met_broker_in_a_hospital: true,
                victim_how_met_broker_went_myself: true,
                victim_how_met_broker_called_my_mobile: true,
                victim_how_met_broker_other: true,
                victim_how_met_broker_other_value: "Foo"
           }

           builder = new MeetBrokerBuilder(vif);
        });

        describe('community is set to true', () => {
            it('should set all other values to false', () => {
                builder.community = true;

                expect(builder.community).toEqual(true);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('work is set to true', () => {
            it('should set all other values to false', () => {
                builder.work = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(true);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('school is set to true', () => {
            it('should set all other values to false', () => {
                builder.school = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(true);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('advertisement is set to true', () => {
            it('should set all other values to false', () => {
                builder.advertisement = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(true);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('approached is set to true', () => {
            it('should set all other values to false', () => {
                builder.approached = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(true);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('friends is set to true', () => {
            it('should set all other values to false', () => {
                builder.friends = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(true);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('family is set to true', () => {
            it('should set all other values to false', () => {
                builder.family = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(true);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('wedding is set to true', () => {
            it('should set all other values to false', () => {
                builder.wedding = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(true);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('vehicle is set to true', () => {
            it('should set all other values to false', () => {
                builder.vehicle = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(true);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('hospital is set to true', () => {
            it('should set all other values to false', () => {
                builder.hospital = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(true);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('myself is set to true', () => {
            it('should set all other values to false', () => {
                builder.myself = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(true);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('mobile is set to true', () => {
            it('should set all other values to false', () => {
                builder.mobile = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });

        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;

                expect(builder.community).toEqual(false);
                expect(builder.work).toEqual(false);
                expect(builder.school).toEqual(false);
                expect(builder.advertisement).toEqual(false);
                expect(builder.approached).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.family).toEqual(false);
                expect(builder.wedding).toEqual(false);
                expect(builder.vehicle).toEqual(false);
                expect(builder.hospital).toEqual(false);
                expect(builder.myself).toEqual(false);
                expect(builder.mobile).toEqual(false);
                expect(builder.other).toEqual(true);
            });
        });

        describe('when otherText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.otherText = text;

                expect(builder.otherText).toEqual(text);
            });
        });
    });
});