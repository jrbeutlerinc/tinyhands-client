import ArrangeSomeoneBuilder from './arrangeSomeoneBuilder';

describe('ArrangeSomeoneBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new ArrangeSomeoneBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.yes).toEqual(false);
            expect(builder.no).toEqual(false);
            expect(builder.meetingBroker).toEqual(false);
            expect(builder.meetingCompanion).toEqual(false);
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                meeting_at_border_yes: true,
                meeting_at_border_no: true,
                meeting_at_border_meeting_broker: true,
                meeting_at_border_meeting_companion: true
           }

           builder = new ArrangeSomeoneBuilder(vif);
        });

        it('should set caste option values to match vif', () => {
            expect(builder.yes).toEqual(vif.meeting_at_border_yes);
            expect(builder.no).toEqual(vif.meeting_at_border_no);
            expect(builder.meetingBroker).toEqual(vif.meeting_at_border_meeting_broker);
            expect(builder.meetingCompanion).toEqual(vif.meeting_at_border_meeting_companion);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                meeting_at_border_yes: true,
                meeting_at_border_no: true,
                meeting_at_border_meeting_broker: true,
                meeting_at_border_meeting_companion: true
           }

           builder = new ArrangeSomeoneBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.yes).toEqual(builder.yes);
            expect(builder.no).toEqual(builder.no);
            expect(builder.meetingBroker).toEqual(builder.meetingBroker);
            expect(builder.meetingCompanion).toEqual(builder.meetingCompanion);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                meeting_at_border_yes: true,
                meeting_at_border_no: true,
                meeting_at_border_meeting_broker: true,
                meeting_at_border_meeting_companion: true
           }

           builder = new ArrangeSomeoneBuilder(vif);
        });

        describe('yes is set to true', () => {
            it('should set all other values to false', () => {
                builder.yes = true;

                expect(builder.yes).toEqual(true);
                expect(builder.no).toEqual(false);
                expect(builder.meetingBroker).toEqual(false);
                expect(builder.meetingCompanion).toEqual(false);
            });
        });

        describe('no is set to true', () => {
            it('should set all other values to false', () => {
                builder.no = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(true);
                expect(builder.meetingBroker).toEqual(false);
                expect(builder.meetingCompanion).toEqual(false);
            });
        });

        describe('meetingBroker is set to true', () => {
            it('should set all other values to false', () => {
                builder.meetingBroker = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(false);
                expect(builder.meetingBroker).toEqual(true);
                expect(builder.meetingCompanion).toEqual(false);
            });
        });

        describe('meetingCompanion is set to true', () => {
            it('should set all other values to false', () => {
                builder.meetingCompanion = true;

                expect(builder.yes).toEqual(false);
                expect(builder.no).toEqual(false);
                expect(builder.meetingBroker).toEqual(false);
                expect(builder.meetingCompanion).toEqual(true);
            });
        });
    });
});