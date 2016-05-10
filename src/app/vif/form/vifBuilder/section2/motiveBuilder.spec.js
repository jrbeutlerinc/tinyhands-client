import MotiveBuilder from './motiveBuilder';

describe('MotiveBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new MotiveBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.supportMyself).toEqual(false);
            expect(builder.supportFamily).toEqual(false);
            expect(builder.personalDebt).toEqual(false);
            expect(builder.familyDebt).toEqual(false);
            expect(builder.loveMarriage).toEqual(false);
            expect(builder.badHomeMarriage).toEqual(false);
            expect(builder.education).toEqual(false);
            expect(builder.tourTravel).toEqual(false);
            expect(builder.didntKnow).toEqual(false);
            expect(builder.other).toEqual(false);
        });

        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                primary_motivation_support_myself: true,
                primary_motivation_support_family: true,
                primary_motivation_personal_debt: true,
                primary_motivation_family_debt: true,
                primary_motivation_love_marriage: true,
                primary_motivation_bad_home_marriage: true,
                primary_motivation_get_education: true,
                primary_motivation_tour_travel: true,
                primary_motivation_didnt_know: true,
                primary_motivation_other: true,
                primary_motivation_other_value: "Foo"
           }

           builder = new MotiveBuilder(vif);
        });

        it('should set caste option values to match vif', () => {
            expect(builder.supportMyself).toEqual(vif.primary_motivation_support_myself);
            expect(builder.supportFamily).toEqual(vif.primary_motivation_support_family);
            expect(builder.personalDebt).toEqual(vif.primary_motivation_personal_debt);
            expect(builder.familyDebt).toEqual(vif.primary_motivation_family_debt);
            expect(builder.loveMarriage).toEqual(vif.primary_motivation_love_marriage);
            expect(builder.badHomeMarriage).toEqual(vif.primary_motivation_bad_home_marriage);
            expect(builder.education).toEqual(vif.primary_motivation_get_education);
            expect(builder.tourTravel).toEqual(vif.primary_motivation_tour_travel);
            expect(builder.didntKnow).toEqual(vif.primary_motivation_didnt_know);
            expect(builder.other).toEqual(vif.primary_motivation_other);
        });

        it('should set other text to match vif', () => {
            expect(builder.otherText).toEqual(vif.primary_motivation_other_value);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                primary_motivation_support_myself: true,
                primary_motivation_support_family: true,
                primary_motivation_personal_debt: true,
                primary_motivation_family_debt: true,
                primary_motivation_love_marriage: true,
                primary_motivation_bad_home_marriage: true,
                primary_motivation_get_education: true,
                primary_motivation_tour_travel: true,
                primary_motivation_didnt_know: true,
                primary_motivation_other: true,
                primary_motivation_other_value: "Foo"
           }

           builder = new MotiveBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.supportMyself).toEqual(builder.supportMyself);
            expect(builder.supportFamily).toEqual(builder.supportFamily);
            expect(builder.personalDebt).toEqual(builder.personalDebt);
            expect(builder.familyDebt).toEqual(builder.familyDebt);
            expect(builder.loveMarriage).toEqual(builder.loveMarriage);
            expect(builder.badHomeMarriage).toEqual(builder.badHomeMarriage);
            expect(builder.education).toEqual(builder.education);
            expect(builder.tourTravel).toEqual(builder.tourTravel);
            expect(builder.didntKnow).toEqual(builder.didntKnow);
            expect(builder.other).toEqual(builder.other);
            expect(builtVif.primary_motivation_other_value).toEqual(builder.otherText);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                primary_motivation_support_myself: true,
                primary_motivation_support_family: true,
                primary_motivation_personal_debt: true,
                primary_motivation_family_debt: true,
                primary_motivation_love_marriage: true,
                primary_motivation_bad_home_marriage: true,
                primary_motivation_get_education: true,
                primary_motivation_tour_travel: true,
                primary_motivation_didnt_know: true,
                primary_motivation_other: true,
                primary_motivation_other_value: "Foo"
           }

           builder = new MotiveBuilder(vif);
        });

        describe('supportMyself is set to true', () => {
            it('should set all other values to false', () => {
                builder.supportMyself = true;

                expect(builder.supportMyself).toEqual(true);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('supportFamily is set to true', () => {
            it('should set all other values to false', () => {
                builder.supportFamily = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(true);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('personalDebt is set to true', () => {
            it('should set all other values to false', () => {
                builder.personalDebt = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(true);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('familyDebt is set to true', () => {
            it('should set all other values to false', () => {
                builder.familyDebt = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(true);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('loveMarriage is set to true', () => {
            it('should set all other values to false', () => {
                builder.loveMarriage = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(true);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('badHomeMarriage is set to true', () => {
            it('should set all other values to false', () => {
                builder.badHomeMarriage = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(true);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('education is set to true', () => {
            it('should set all other values to false', () => {
                builder.education = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(true);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('tourTravel is set to true', () => {
            it('should set all other values to false', () => {
                builder.tourTravel = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(true);
                expect(builder.didntKnow).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('didntKnow is set to true', () => {
            it('should set all other values to false', () => {
                builder.didntKnow = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });

        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;

                expect(builder.supportMyself).toEqual(false);
                expect(builder.supportFamily).toEqual(false);
                expect(builder.personalDebt).toEqual(false);
                expect(builder.familyDebt).toEqual(false);
                expect(builder.loveMarriage).toEqual(false);
                expect(builder.badHomeMarriage).toEqual(false);
                expect(builder.education).toEqual(false);
                expect(builder.tourTravel).toEqual(false);
                expect(builder.didntKnow).toEqual(false);
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