import Section7Builder from './section7Builder';

describe('Section7Builder', () => {

    let builder;

    describe('when no vif given in constructor', () => {

        beforeEach(() => {
            builder = new Section7Builder();
        });

        it('should set question1 to null', () => {
            expect(builder.question1).toEqual(null);
        });

        it('should set question2 to null', () => {
            expect(builder.question2).toEqual(null);
        });

        it('should set question3 to null', () => {
            expect(builder.question3).toEqual(null);
        });

        it('should set question4 to null', () => {
            expect(builder.question4).toEqual(null);
        });

        it('should set question5 to null', () => {
            expect(builder.question5).toEqual(null);
        });

        it('should set question10 to null', () => {
            expect(builder.question10).toEqual(null);
        });
    });

    describe('when vif passed in constructor', () => {
        let builder, vif;

        beforeEach(() => {
            vif = {
                guardian_knew_was_travelling_to_india: true,
                family_pressured_victim: true,
                family_will_try_sending_again: true,
                victim_feels_safe_at_home: true,
                victim_wants_to_go_home: true,
                victim_had_suicidal_thoughts: true
            }
            builder = new Section7Builder(vif);
        });

        it('should set question1 to equal vif.guardian_knew_was_travelling_to_india', () => {
            expect(builder.question1).toEqual(vif.guardian_knew_was_travelling_to_india);
        });

        it('should set question2 to equal vif.family_pressured_victim', () => {
            expect(builder.question2).toEqual(vif.family_pressured_victim);
        });

        it('should set question3 to equal vif.family_will_try_sending_again', () => {
            expect(builder.question3).toEqual(vif.family_will_try_sending_again);
        });

        it('should set question4 to equal vif.victim_feels_safe_at_home', () => {
            expect(builder.question4).toEqual(vif.victim_feels_safe_at_home);
        });

        it('should set question5 to equal vif.victim_wants_to_go_home', () => {
            expect(builder.question5).toEqual(vif.victim_wants_to_go_home);
        });

        it('should set question6 to equal vif.victim_had_suicidal_thoughts', () => {
            expect(builder.question10).toEqual(vif.victim_had_suicidal_thoughts);
        });
    });

    describe('build', ()  => {
        let builder,
            vif,
            alcoholBuilder,
            drugsBuilder,
            economicBuilder,
            emotionalAbuseBuilder,
            physicalAbuseBuilder,
            sexualAbuseBuilder,
            builtVif;

        beforeAll(() => {
            vif = {
                guardian_knew_was_travelling_to_india: true,
                family_pressured_victim: true,
                family_will_try_sending_again: true,
                victim_feels_safe_at_home: true,
                victim_wants_to_go_home: true,
                victim_had_suicidal_thoughts: true
            }
            alcoholBuilder = new jasmine.createSpyObj('alcoholBuilder', ['build']);
            drugsBuilder = new jasmine.createSpyObj('drugsBuilder', ['build']);
            economicBuilder = new jasmine.createSpyObj('economicBuilder', ['build']);
            emotionalAbuseBuilder = new jasmine.createSpyObj('emotionalAbuseBuilder', ['build']);
            physicalAbuseBuilder = new jasmine.createSpyObj('physicalAbuseBuilder', ['build']);
            sexualAbuseBuilder = new jasmine.createSpyObj('sexualAbuseBuilder', ['build']);

            builder = new Section7Builder(vif, alcoholBuilder, drugsBuilder, economicBuilder,
                emotionalAbuseBuilder, physicalAbuseBuilder, sexualAbuseBuilder);
        });

        it('should call build on alcoholBuilder', () => {
            builder.build();
            expect(alcoholBuilder.build).toHaveBeenCalled();
        });

        it('should call build on drugsBuilder', () => {
            builder.build();
            expect(drugsBuilder.build).toHaveBeenCalled();
        });

        it('should call build on economicBuilder', () => {
            builder.build();
            expect(economicBuilder.build).toHaveBeenCalled();
        });

        it('should call build on emotionalAbuseBuilder', () => {
            builder.build();
            expect(emotionalAbuseBuilder.build).toHaveBeenCalled();
        });

        it('should call build on physicalAbuseBuilder', () => {
            builder.build();
            expect(physicalAbuseBuilder.build).toHaveBeenCalled();
        });

        it('should call build on sexualAbuseBuilder', () => {
            builder.build();
            expect(sexualAbuseBuilder.build).toHaveBeenCalled();
        });

        it('should set guardian_knew_was_travelling_to_india on vif', () => {
            builtVif = builder.build(vif);
            expect(builtVif.guardian_knew_was_travelling_to_india).toEqual(vif.guardian_knew_was_travelling_to_india);
        });

        it('should set family_pressured_victim on vif', () => {
            builtVif = builder.build(vif);
            expect(builtVif.family_pressured_victim).toEqual(vif.family_pressured_victim);
        });

        it('should set family_will_try_sending_again on vif', () => {
            builtVif = builder.build(vif);
            expect(builtVif.family_will_try_sending_again).toEqual(vif.family_will_try_sending_again);
        });

        it('should set victim_feels_safe_at_home on vif', () => {
            builtVif = builder.build(vif);
            expect(builtVif.victim_feels_safe_at_home).toEqual(vif.victim_feels_safe_at_home);
        });

        it('should set victim_wants_to_go_home on vif', () => {
            builtVif = builder.build(vif);
            expect(builtVif.victim_wants_to_go_home).toEqual(vif.victim_wants_to_go_home);
        });

        it('should set victim_had_suicidal_thoughts', () => {
            builtVif = builder.build(vif);
            expect(builtVif.victim_had_suicidal_thoughts).toEqual(vif.victim_had_suicidal_thoughts);
        });
    });

    describe('when question1 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question1 = true;
        });

        it('question1 should return true', () => {
            expect(builder.question1).toEqual(true);
        });
    });

    describe('when question2 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question2 = true;
        });

        it('question2 should return true', () => {
            expect(builder.question2).toEqual(true);
        });
    });

    describe('when question3 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question3 = true;
        });

        it('question3 should return true', () => {
            expect(builder.question3).toEqual(true);
        });
    });

    describe('when question4 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question4 = true;
        });

        it('question4 should return true', () => {
            expect(builder.question4).toEqual(true);
        });
    });

    describe('when question5 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question5 = true;
        });

        it('question5 should return true', () => {
            expect(builder.question5).toEqual(true);
        });
    });

    describe('when question10 set to true;', () => {
        beforeEach(() => {
            builder = new Section7Builder();
            builder.question10 = true;
        });

        it('question10 should return true', () => {
            expect(builder.question10).toEqual(true);
        });
    });
});