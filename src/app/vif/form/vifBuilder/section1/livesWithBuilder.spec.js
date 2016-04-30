import LivesWithBuilder from './livesWithBuilder';

describe('LivesWithBuilder', () => {
    let builder, vif;
    
    describe('when no vif in constructor', () => {
        
        beforeAll(() => {
            builder = new LivesWithBuilder();
        })
        
        it('should set all options to false', () => {
            expect(builder.parents).toEqual(false);
            expect(builder.husband).toEqual(false);
            expect(builder.husbandsFamily).toEqual(false);
            expect(builder.friends).toEqual(false);
            expect(builder.alone).toEqual(false);
            expect(builder.otherRelative).toEqual(false);
            expect(builder.other).toEqual(false);            
        });
        
        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual('');
        });
    });
    
    describe('when vif in constructor', () => {
        
        beforeAll(() => {
            vif = {
                victim_lives_with_own_parents: true,
                victim_lives_with_husband: true,
                victim_lives_with_husbands_family: true,
                victim_lives_with_friends: true,
                victim_lives_with_alone: true,
                victim_lives_with_other_relative: true,
                victim_lives_with_other: true,
                victim_lives_with_other_value: "Foo",                
            }
            builder = new LivesWithBuilder(vif);
        })
        
        it('should set all options to vif values', () => {
            expect(builder.parents).toEqual(vif.victim_lives_with_own_parents);
            expect(builder.husband).toEqual(vif.victim_lives_with_husband);
            expect(builder.husbandsFamily).toEqual(vif.victim_lives_with_husbands_family);
            expect(builder.friends).toEqual(vif.victim_lives_with_friends);
            expect(builder.alone).toEqual(vif.victim_lives_with_alone);
            expect(builder.otherRelative).toEqual(vif.victim_lives_with_other_relative);
            expect(builder.other).toEqual(vif.victim_lives_with_other);            
        });
        
        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual(vif.victim_lives_with_other_value);
        });
    });
    
    describe('when building vif', () => {
        it('should set correct values on built vif', () => {
            builder = new LivesWithBuilder();
            let builtVif = builder.build();
            
            expect(builtVif.victim_lives_with_own_parents).toEqual(builder.parents);
            expect(builtVif.victim_lives_with_husband).toEqual(builder.husband);
            expect(builtVif.victim_lives_with_husbands_family).toEqual(builder.husbandsFamily);
            expect(builtVif.victim_lives_with_friends).toEqual(builder.friends);
            expect(builtVif.victim_lives_with_alone).toEqual(builder.alone);
            expect(builtVif.victim_lives_with_other_relative).toEqual(builder.otherRelative);
            expect(builtVif.victim_lives_with_other).toEqual(builder.other);
            expect(builtVif.victim_lives_with_other_value).toEqual(builder.otherText);            
        });
    });
    
    describe('when', () => {
        beforeEach(() => {
           vif = {
                victim_lives_with_own_parents: true,
                victim_lives_with_husband: true,
                victim_lives_with_husbands_family: true,
                victim_lives_with_friends: true,
                victim_lives_with_alone: true,
                victim_lives_with_other_relative: true,
                victim_lives_with_other: true,
                victim_lives_with_other_value: "Foo",                
            }
            builder = new LivesWithBuilder(vif); 
        });
        
        describe('builder.parents is set to true', () => {
            it('should set other options to false', () => {
                builder.parents = true;
                
                expect(builder.parents).toEqual(true);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.husband is set to true', () => {
            it('should set other options to false', () => {
                builder.husband = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(true);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.husbandsFamily is set to true', () => {
            it('should set other options to false', () => {
                builder.husbandsFamily = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(true);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.friends is set to true', () => {
            it('should set other options to false', () => {
                builder.friends = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(true);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.alone is set to true', () => {
            it('should set other options to false', () => {
                builder.alone = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(true);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.otherRelative is set to true', () => {
            it('should set other options to false', () => {
                builder.otherRelative = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('builder.other is set to true', () => {
            it('should set other options to false', () => {
                builder.other = true;
                
                expect(builder.parents).toEqual(false);
                expect(builder.husband).toEqual(false);
                expect(builder.husbandsFamily).toEqual(false);
                expect(builder.friends).toEqual(false);
                expect(builder.alone).toEqual(false);
                expect(builder.otherRelative).toEqual(false);
                expect(builder.other).toEqual(true);
            });
        });
    });
    
    it('should correctly set otherText', () => {
        let text = 'foo';
        builder = new LivesWithBuilder();
        builder.otherText = text;
        
        expect(builder.otherText).toEqual(text);
    });
    
});