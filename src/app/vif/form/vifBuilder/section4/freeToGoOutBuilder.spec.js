import FreeToGoOutBuilder from './freeToGoOutBuilder';

describe('FreeToGoOutBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new FreeToGoOutBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.yes).toEqual(false);
            expect(builder.no).toEqual(false);
        });

        it('should set explain text to empty string', () => {
            expect(builder.explainText).toEqual('');
        });
    });


    describe('when constructed with vif', () => {

        let vif;

        beforeEach(() => {
            vif = {
                victim_was_free_to_go_out: true,
                victim_was_free_to_go_out_explanation: "Foo"
           }

           builder = new FreeToGoOutBuilder(vif);
        });

        it('should set expense option values to match vif', () => {
            expect(builder.yes).toEqual(vif.victim_was_free_to_go_out);
            expect(builder.no).toEqual(!vif.victim_was_free_to_go_out);
        });

        it('should set explain text to match vif', () => {
            expect(builder.explainText).toEqual(vif.victim_was_free_to_go_out_explanation);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_was_free_to_go_out: true,
                victim_was_free_to_go_out_explanation: "Foo"
           }

           builder = new FreeToGoOutBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.yes).toEqual(builder.yes);
            expect(builder.no).toEqual(builder.no);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                victim_was_free_to_go_out: true,
                victim_was_free_to_go_out_explanation: "Foo"
           }

           builder = new FreeToGoOutBuilder(vif);
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