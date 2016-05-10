import MigrationPlansBuilder from './migrationPlansBuilder';

describe('MigrationPlansBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new MigrationPlansBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.education).toEqual(false);
            expect(builder.travelTour).toEqual(false);
            expect(builder.shopping).toEqual(false);
            expect(builder.eloping).toEqual(false);
            expect(builder.arrangedMarriage).toEqual(false);
            expect(builder.meetOwnFamily).toEqual(false);
            expect(builder.visitBrokersHome).toEqual(false);
            expect(builder.medicalTreatment).toEqual(false);
            expect(builder.jobBrokerDidntSay).toEqual(false);
            expect(builder.jobBabyCare).toEqual(false);
            expect(builder.jobFactory).toEqual(false);
            expect(builder.jobHotel).toEqual(false);
            expect(builder.jobShop).toEqual(false);
            expect(builder.jobLaborer).toEqual(false);
            expect(builder.jobBrothel).toEqual(false);
            expect(builder.jobHousehold).toEqual(false);
            expect(builder.jobOther).toEqual(false);
            expect(builder.other).toEqual(false);
        });

        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual('');
            expect(builder.jobOtherText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                migration_plans_education: true,
                migration_plans_travel_tour: true,
                migration_plans_shopping: true,
                migration_plans_eloping: true,
                migration_plans_arranged_marriage: true,
                migration_plans_meet_own_family: true,
                migration_plans_visit_brokers_home: true,
                migration_plans_medical_treatment: true,
                migration_plans_job_broker_didnt_say: true,
                migration_plans_job_baby_care: true,
                migration_plans_job_factory: true,
                migration_plans_job_hotel: true,
                migration_plans_job_shop: true,
                migration_plans_job_laborer: true,
                migration_plans_job_brothel: true,
                migration_plans_job_household: true,
                migration_plans_job_other: true,
                migration_plans_other: true,
                migration_plans_other_value: "Foo",
                migration_plans_job_other_value: "Foo"
           };

           builder = new MigrationPlansBuilder(vif);
        })

        it('should set migration option values to match vif', () => {
            expect(builder.education).toEqual(vif.migration_plans_education);
            expect(builder.travelTour).toEqual(vif.migration_plans_travel_tour);
            expect(builder.shopping).toEqual(vif.migration_plans_shopping);
            expect(builder.eloping).toEqual(vif.migration_plans_eloping);
            expect(builder.arrangedMarriage).toEqual(vif.migration_plans_arranged_marriage);
            expect(builder.meetOwnFamily).toEqual(vif.migration_plans_meet_own_family);
            expect(builder.visitBrokersHome).toEqual(vif.migration_plans_visit_brokers_home);
            expect(builder.medicalTreatment).toEqual(vif.migration_plans_medical_treatment);
            expect(builder.jobBrokerDidntSay).toEqual(vif.migration_plans_job_broker_didnt_say);
            expect(builder.jobBabyCare).toEqual(vif.migration_plans_job_baby_care);
            expect(builder.jobFactory).toEqual(vif.migration_plans_job_factory);
            expect(builder.jobHotel).toEqual(vif.migration_plans_job_hotel);
            expect(builder.jobShop).toEqual(vif.migration_plans_job_shop);
            expect(builder.jobLaborer).toEqual(vif.migration_plans_job_laborer);
            expect(builder.jobBrothel).toEqual(vif.migration_plans_job_brothel);
            expect(builder.jobHousehold).toEqual(vif.migration_plans_job_household);
            expect(builder.jobOther).toEqual(vif.migration_plans_job_other);
        });

        it('should set other text to match vif', () => {
            expect(builder.otherText).toEqual(vif.migration_plans_other_value);
            expect(builder.jobOtherText).toEqual(vif.migration_plans_job_other_value);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                migration_plans_education: true,
                migration_plans_travel_tour: true,
                migration_plans_shopping: true,
                migration_plans_eloping: true,
                migration_plans_arranged_marriage: true,
                migration_plans_meet_own_family: true,
                migration_plans_visit_brokers_home: true,
                migration_plans_medical_treatment: true,
                migration_plans_job_broker_didnt_say: true,
                migration_plans_job_baby_care: true,
                migration_plans_job_factory: true,
                migration_plans_job_hotel: true,
                migration_plans_job_shop: true,
                migration_plans_job_laborer: true,
                migration_plans_job_brothel: true,
                migration_plans_job_household: true,
                migration_plans_job_other: true,
                migration_plans_other: true,
                migration_plans_other_value: "Foo",
                migration_plans_job_other_value: "Foo"
           }

           builder = new MigrationPlansBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.education).toEqual(builder.education);
            expect(builder.travelTour).toEqual(builder.travelTour);
            expect(builder.shopping).toEqual(builder.shopping);
            expect(builder.eloping).toEqual(builder.eloping);
            expect(builder.arrangedMarriage).toEqual(builder.arrangedMarriage);
            expect(builder.meetOwnFamily).toEqual(builder.meetOwnFamily);
            expect(builder.visitBrokersHome).toEqual(builder.visitBrokersHome);
            expect(builder.medicalTreatment).toEqual(builder.medicalTreatment);
            expect(builder.jobBrokerDidntSay).toEqual(builder.jobBrokerDidntSay);
            expect(builder.jobBabyCare).toEqual(builder.jobBabyCare);
            expect(builder.jobFactory).toEqual(builder.jobFactory);
            expect(builder.jobHotel).toEqual(builder.jobHotel);
            expect(builder.jobShop).toEqual(builder.jobShop);
            expect(builder.jobLaborer).toEqual(builder.jobLaborer);
            expect(builder.jobBrothel).toEqual(builder.jobBrothel);
            expect(builder.jobHousehold).toEqual(builder.jobHousehold);
            expect(builder.jobOther).toEqual(builder.jobOther);
            expect(builtVif.migration_plans_other_value).toEqual(builder.otherText);
            expect(builtVif.migration_plans_job_other_value).toEqual(builder.jobOtherText);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                migration_plans_education: true,
                migration_plans_travel_tour: true,
                migration_plans_shopping: true,
                migration_plans_eloping: true,
                migration_plans_arranged_marriage: true,
                migration_plans_meet_own_family: true,
                migration_plans_visit_brokers_home: true,
                migration_plans_medical_treatment: true,
                migration_plans_job_broker_didnt_say: true,
                migration_plans_job_baby_care: true,
                migration_plans_job_factory: true,
                migration_plans_job_hotel: true,
                migration_plans_job_shop: true,
                migration_plans_job_laborer: true,
                migration_plans_job_brothel: true,
                migration_plans_job_household: true,
                migration_plans_job_other: true,
                migration_plans_other: true,
                migration_plans_other_value: "Foo",
                migration_plans_job_other_value: "Foo"
           }

           builder = new MigrationPlansBuilder(vif);
        });

        describe('education is set to true', () => {
            it('should set all other values to false', () => {
                builder.education = true;

                expect(builder.education).toEqual(true);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('travelTour is set to true', () => {
            it('should set all other values to false', () => {
                builder.travelTour = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(true);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('shopping is set to true', () => {
            it('should set all other values to false', () => {
                builder.shopping = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(true);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('eloping is set to true', () => {
            it('should set all other values to false', () => {
                builder.eloping = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(true);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('arrangedMarriage is set to true', () => {
            it('should set all other values to false', () => {
                builder.arrangedMarriage = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(true);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('meetOwnFamily is set to true', () => {
            it('should set all other values to false', () => {
                builder.meetOwnFamily = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(true);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('visitBrokersHome is set to true', () => {
            it('should set all other values to false', () => {
                builder.visitBrokersHome = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(true);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('medicalTreatment is set to true', () => {
            it('should set all other values to false', () => {
                builder.medicalTreatment = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(true);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobBrokerDidntSay is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobBrokerDidntSay = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(true);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobBabyCare is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobBabyCare = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(true);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobFactory is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobFactory = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(true);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobHotel is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobHotel = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(true);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobShop is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobShop = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(true);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobLaborer is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobLaborer = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(true);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobBrothel is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobBrothel = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(true);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobHousehold is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobHousehold = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(true);
                expect(builder.jobOther).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('jobOther is set to true', () => {
            it('should set all other values to false', () => {
                builder.jobOther = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });

        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;

                expect(builder.education).toEqual(false);
                expect(builder.travelTour).toEqual(false);
                expect(builder.shopping).toEqual(false);
                expect(builder.eloping).toEqual(false);
                expect(builder.arrangedMarriage).toEqual(false);
                expect(builder.meetOwnFamily).toEqual(false);
                expect(builder.visitBrokersHome).toEqual(false);
                expect(builder.medicalTreatment).toEqual(false);
                expect(builder.jobBrokerDidntSay).toEqual(false);
                expect(builder.jobBabyCare).toEqual(false);
                expect(builder.jobFactory).toEqual(false);
                expect(builder.jobHotel).toEqual(false);
                expect(builder.jobShop).toEqual(false);
                expect(builder.jobLaborer).toEqual(false);
                expect(builder.jobBrothel).toEqual(false);
                expect(builder.jobHousehold).toEqual(false);
                expect(builder.jobOther).toEqual(false);
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

        describe('when jobOtherText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.jobOtherText = text;

                expect(builder.jobOtherText).toEqual(text);
            });
        });
    });
});