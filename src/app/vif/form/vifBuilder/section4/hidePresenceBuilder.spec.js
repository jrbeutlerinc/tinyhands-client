import HidePresenceBuilder from './hidePresenceBuilder';

describe('HidePresenceBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new HidePresenceBuilder();
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
                was_hidden: true,
                was_hidden_explanation: "Foo"
           }

           builder = new HidePresenceBuilder(vif);
        });

        it('should set expense option values to match vif', () => {
            expect(builder.yes).toEqual(vif.was_hidden);
            expect(builder.no).toEqual(!vif.was_hidden);
        });

        it('should set explain text to match vif', () => {
            expect(builder.explainText).toEqual(vif.was_hidden_explanation);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                was_hidden: true,
                was_hidden_explanation: "Foo"
           }

           builder = new HidePresenceBuilder(vif);
        });

        it('should set correct values on built vif', () => {
            expect(builder.yes).toEqual(builder.yes);
            expect(builder.no).toEqual(builder.no);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                was_hidden: true,
                was_hidden_explanation: "Foo"
           }

           builder = new HidePresenceBuilder(vif);
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

        describe('explainText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.explainText = text;

                expect(builder.explainText).toEqual(text);
            });
        });
    });
});