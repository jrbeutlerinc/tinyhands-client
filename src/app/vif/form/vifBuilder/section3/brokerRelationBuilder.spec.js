import BrokerRelationBuilder from './brokerRelationBuilder';

describe('BrokerRelationBuilder', () => {

    let builder;

    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new BrokerRelationBuilder();
        })

        it('should set all options to false', () => {
            expect(builder.dad).toEqual(false);
            expect(builder.mom).toEqual(false);
            expect(builder.uncle).toEqual(false);
            expect(builder.aunt).toEqual(false);
            expect(builder.bro).toEqual(false);
            expect(builder.sister).toEqual(false);
            expect(builder.otherRelative).toEqual(false);
            expect(builder.friend).toEqual(false);
            expect(builder.agent).toEqual(false);
            expect(builder.husband).toEqual(false);
            expect(builder.boyfriend).toEqual(false);
            expect(builder.neighbor).toEqual(false);
            expect(builder.recentlyMet).toEqual(false);
            expect(builder.contractor).toEqual(false);
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
                brokers_relation_to_victim_own_dad: true,
                brokers_relation_to_victim_own_mom: true,
                brokers_relation_to_victim_own_uncle: true,
                brokers_relation_to_victim_own_aunt: true,
                brokers_relation_to_victim_own_bro: true,
                brokers_relation_to_victim_own_sister: true,
                brokers_relation_to_victim_own_other_relative: true,
                brokers_relation_to_victim_friend: true,
                brokers_relation_to_victim_agent: true,
                brokers_relation_to_victim_husband: true,
                brokers_relation_to_victim_boyfriend: true,
                brokers_relation_to_victim_neighbor: true,
                brokers_relation_to_victim_recently_met: true,
                brokers_relation_to_victim_contractor: true,
                brokers_relation_to_victim_other: true,
                brokers_relation_to_victim_other_value: "Foo"
           };

           builder = new BrokerRelationBuilder(vif);
        })

        it('should set migration option values to match vif', () => {
            expect(builder.dad).toEqual(vif.brokers_relation_to_victim_own_dad);
            expect(builder.mom).toEqual(vif.brokers_relation_to_victim_own_mom);
            expect(builder.uncle).toEqual(vif.brokers_relation_to_victim_own_uncle);
            expect(builder.aunt).toEqual(vif.brokers_relation_to_victim_own_aunt);
            expect(builder.bro).toEqual(vif.brokers_relation_to_victim_own_bro);
            expect(builder.sister).toEqual(vif.brokers_relation_to_victim_own_sister);
            expect(builder.otherRelative).toEqual(vif.brokers_relation_to_victim_own_other_relative);
            expect(builder.friend).toEqual(vif.brokers_relation_to_victim_friend);
            expect(builder.agent).toEqual(vif.brokers_relation_to_victim_agent);
            expect(builder.husband).toEqual(vif.brokers_relation_to_victim_husband);
            expect(builder.boyfriend).toEqual(vif.brokers_relation_to_victim_boyfriend);
            expect(builder.neighbor).toEqual(vif.brokers_relation_to_victim_neighbor);
            expect(builder.recentlyMet).toEqual(vif.brokers_relation_to_victim_recently_met);
            expect(builder.contractor).toEqual(vif.brokers_relation_to_victim_contractor);
            expect(builder.other).toEqual(vif.brokers_relation_to_victim_other);
        });

        it('should set text fields to match vif', () => {
            expect(builder.otherText).toEqual(vif.brokers_relation_to_victim_other_value);
        });
    });

    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                brokers_relation_to_victim_own_dad: true,
                brokers_relation_to_victim_own_mom: true,
                brokers_relation_to_victim_own_uncle: true,
                brokers_relation_to_victim_own_aunt: true,
                brokers_relation_to_victim_own_bro: true,
                brokers_relation_to_victim_own_sister: true,
                brokers_relation_to_victim_own_other_relative: true,
                brokers_relation_to_victim_friend: true,
                brokers_relation_to_victim_agent: true,
                brokers_relation_to_victim_husband: true,
                brokers_relation_to_victim_boyfriend: true,
                brokers_relation_to_victim_neighbor: true,
                brokers_relation_to_victim_recently_met: true,
                brokers_relation_to_victim_contractor: true,
                brokers_relation_to_victim_other: true,
                brokers_relation_to_victim_other_value: "Foo"
           }

           builder = new BrokerRelationBuilder(vif);
        });

        it('should set correct values on built vif', () => {
           let builtVif = builder.build();

            expect(builder.dad).toEqual(builder.dad);
            expect(builder.mom).toEqual(builder.mom);
            expect(builder.uncle).toEqual(builder.uncle);
            expect(builder.aunt).toEqual(builder.aunt);
            expect(builder.bro).toEqual(builder.bro);
            expect(builder.sister).toEqual(builder.sister);
            expect(builder.otherRelative).toEqual(builder.otherRelative);
            expect(builder.friend).toEqual(builder.friend);
            expect(builder.agent).toEqual(builder.agent);
            expect(builder.husband).toEqual(builder.husband);
            expect(builder.boyfriend).toEqual(builder.boyfriend);
            expect(builder.neighbor).toEqual(builder.neighbor);
            expect(builder.recentlyMet).toEqual(builder.recentlyMet);
            expect(builder.contractor).toEqual(builder.contractor);
            expect(builder.other).toEqual(builder.other);
            expect(builtVif.brokers_relation_to_victim_other_value).toEqual(builder.otherText);
        });

    });

    describe('when', () => {

        beforeEach(() => {
            let vif = {
                brokers_relation_to_victim_own_dad: true,
                brokers_relation_to_victim_own_mom: true,
                brokers_relation_to_victim_own_uncle: true,
                brokers_relation_to_victim_own_aunt: true,
                brokers_relation_to_victim_own_bro: true,
                brokers_relation_to_victim_own_sister: true,
                brokers_relation_to_victim_own_other_relative: true,
                brokers_relation_to_victim_friend: true,
                brokers_relation_to_victim_agent: true,
                brokers_relation_to_victim_husband: true,
                brokers_relation_to_victim_boyfriend: true,
                brokers_relation_to_victim_neighbor: true,
                brokers_relation_to_victim_recently_met: true,
                brokers_relation_to_victim_contractor: true,
                brokers_relation_to_victim_other: true,
                brokers_relation_to_victim_other_value: "Foo"
           }

           builder = new BrokerRelationBuilder(vif);
        });

        describe('dad is set to true', () => {
            it('should set all other values to false', () => {
                builder.dad = true;

                expect(builder.dad).toEqual(true);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('mom is set to true', () => {
            it('should set all other values to false', () => {
                builder.mom = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(true);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('uncle is set to true', () => {
            it('should set all other values to false', () => {
                builder.uncle = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(true);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('aunt is set to true', () => {
            it('should set all other values to false', () => {
                builder.aunt = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(true);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('bro is set to true', () => {
            it('should set all other values to false', () => {
                builder.bro = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(true);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('sister is set to true', () => {
            it('should set all other values to false', () => {
                builder.sister = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(true);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('otherRelative is set to true', () => {
            it('should set all other values to false', () => {
                builder.otherRelative = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(true);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('friend is set to true', () => {
            it('should set all other values to false', () => {
                builder.friend = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(true);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('agent is set to true', () => {
            it('should set all other values to false', () => {
                builder.agent = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(true);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('husband is set to true', () => {
            it('should set all other values to false', () => {
                builder.husband = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(true);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('boyfriend is set to true', () => {
            it('should set all other values to false', () => {
                builder.boyfriend = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(true);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('neighbor is set to true', () => {
            it('should set all other values to false', () => {
                builder.neighbor = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(true);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('recentlyMet is set to true', () => {
            it('should set all other values to false', () => {
                builder.recentlyMet = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(true);
                expect(builder.contractor).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });

        describe('contractor is set to true', () => {
            it('should set all other values to false', () => {
                builder.contractor = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });

        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;

                expect(builder.dad).toEqual(false);
                expect(builder.mom).toEqual(false);
                expect(builder.uncle).toEqual(false);
                expect(builder.aunt).toEqual(false);
                expect(builder.bro).toEqual(false);
                expect(builder.sister).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.friend).toEqual(false);
                expect(builder.agent).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.boyfriend).toEqual(false);
                expect(builder.neighbor).toEqual(false);
                expect(builder.recentlyMet).toEqual(false);
                expect(builder.contractor).toEqual(false);
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