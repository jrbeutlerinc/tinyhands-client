import MeetAgainInIndiaBuilder from './meetAgainInIndiaBuilder';

describe('MeetAgainInIndiaBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new MeetAgainInIndiaBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.yes).toEqual(false);
            expect(builder.no).toEqual(false);
        });
    });

    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                planning_to_meet_companion_later: true
           }

           builder = new MeetAgainInIndiaBuilder(vif);
        });

        it('should set option values to match vif', () => {
            expect(builder.yes).toEqual(vif.planning_to_meet_companion_later);
            expect(builder.no).toEqual(!vif.planning_to_meet_companion_later);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                planning_to_meet_companion_later: true
           }

           builder = new MeetAgainInIndiaBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.yes).toEqual(builder.yes);
            expect(builder.no).toEqual(builder.no);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                planning_to_meet_companion_later: true
           }

           builder = new MeetAgainInIndiaBuilder(vif);
        });

        describe('yes is set to true', () => {
            it('should set all other values to false', () => {
                builder.yes = true;

                expect(builder.yes).toEqual(true);
                expect(builder.no).toEqual(false);
            });
        });

        describe('no is set to true', () => {
            it('should set all other values to false', () => {
                builder.no = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(true);
            });
        });
    });
});