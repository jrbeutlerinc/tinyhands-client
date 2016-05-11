import PassportBuilder from './passportBuilder';

describe('PassportBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new PassportBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.noPassport).toEqual(false);
            expect(builder.realPassport).toEqual(false);
            expect(builder.falseName).toEqual(false);
            expect(builder.falseInfo).toEqual(false);
            expect(builder.fake).toEqual(false);
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                passport_made_no_passport_made: true,
                passport_made_real_passport_made: true,
                passport_made_passport_included_false_name: true,
                passport_made_passport_included_other_false_info: true,
                passport_made_passport_was_fake: true
           }

           builder = new PassportBuilder(vif);
        });

        it('should set option values to match vif', () => {
            expect(builder.noPassport).toEqual(vif.passport_made_no_passport_made);
            expect(builder.realPassport).toEqual(vif.passport_made_real_passport_made);
            expect(builder.falseName).toEqual(vif.passport_made_passport_included_false_name);
            expect(builder.falseInfo).toEqual(vif.passport_made_passport_included_other_false_info);
            expect(builder.fake).toEqual(vif.passport_made_passport_was_fake);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                passport_made_no_passport_made: true,
                passport_made_real_passport_made: true,
                passport_made_passport_included_false_name: true,
                passport_made_passport_included_other_false_info: true,
                passport_made_passport_was_fake: true
           }

           builder = new PassportBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.noPassport).toEqual(builder.noPassport);
            expect(builder.realPassport).toEqual(builder.realPassport);
            expect(builder.falseName).toEqual(builder.falseName);
            expect(builder.falseInfo).toEqual(builder.falseInfo);
            expect(builder.fake).toEqual(builder.fake);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                passport_made_no_passport_made: true,
                passport_made_real_passport_made: true,
                passport_made_passport_included_false_name: true,
                passport_made_passport_included_other_false_info: true,
                passport_made_passport_was_fake: true
           }

           builder = new PassportBuilder(vif);
        });

        describe('noPassport is set to true', () => {
            it('should set all other values to false', () => {
                builder.noPassport = true;

                expect(builder.noPassport).toEqual(true);
                expect(builder.realPassport).toEqual(false);
                expect(builder.falseName).toEqual(false);
                expect(builder.falseInfo).toEqual(false);
                expect(builder.fake).toEqual(false);
            });
        });

        describe('realPassport is set to true', () => {
            it('should set all other values to false', () => {
                builder.realPassport = true;

                expect(builder.noPassport).toEqual(false);
                expect(builder.realPassport).toEqual(true);
                expect(builder.falseName).toEqual(false);
                expect(builder.falseInfo).toEqual(false);
                expect(builder.fake).toEqual(false);
            });
        });

        describe('falseName is set to true', () => {
            it('should set all other values to false', () => {
                builder.falseName = true;

                expect(builder.noPassport).toEqual(false);
                expect(builder.realPassport).toEqual(false);
                expect(builder.falseName).toEqual(true);
                expect(builder.falseInfo).toEqual(false);
                expect(builder.fake).toEqual(false);
            });
        });

        describe('falseInfo is set to true', () => {
            it('should set all other values to false', () => {
                builder.falseInfo = true;

                expect(builder.noPassport).toEqual(false);
                expect(builder.realPassport).toEqual(false);
                expect(builder.falseName).toEqual(false);
                expect(builder.falseInfo).toEqual(true);
                expect(builder.fake).toEqual(false);
            });
        });

        describe('fake is set to true', () => {
            it('should set all other values to false', () => {
                builder.fake = true;

                expect(builder.noPassport).toEqual(false);
                expect(builder.realPassport).toEqual(false);
                expect(builder.falseName).toEqual(false);
                expect(builder.falseInfo).toEqual(false);
                expect(builder.fake).toEqual(true);
            });
        });
    });
});