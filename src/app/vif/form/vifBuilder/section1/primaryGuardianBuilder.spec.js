import PrimaryGuardianBuilder from './primaryGuardianBuilder';

describe('PrimaryGuardianBuilder', () => {
    
    let builder, vif;
    
    describe('when no vif in constructor', () => {
        
        beforeEach(() => {
            builder = new PrimaryGuardianBuilder();
        });
        
        it('should set options to false', () => {
            expect(builder.parents).toEqual(false);
            expect(builder.husband).toEqual(false);
            expect(builder.otherRelative).toEqual(false);
            expect(builder.nonRelative).toEqual(false);
            expect(builder.noOne).toEqual(false);            
        });
        
        it('should set address1 to null', () => {
            expect(builder.address1).toEqual(null);
        });
        
        it('should set address2 to null', () => {
            expect(builder.address2).toEqual(null);
        });
        
        it('should set ward to null', () => {
            expect(builder.ward).toEqual(null);
        });
        
        it('should set phoneNumber to null', () => {
            expect(builder.phoneNumber).toEqual(null);
        });
    });
    
    describe('when vif passed in constructor', () => {
        
        beforeEach(()=> {
            vif = {
                victim_primary_guardian_own_parents: true,
                victim_primary_guardian_husband: true,
                victim_primary_guardian_other_relative: true,
                victim_primary_guardian_non_relative: true,
                victim_primary_guardian_no_one: true,
                victim_guardian_address1: "Foo",
                victim_guardian_address2: "bar",
                victim_guardian_address_ward: 'ward',
                victim_guardian_phone: '1234567890'
            };
            builder = new PrimaryGuardianBuilder(vif); 
        });
        
        it('should set options to match vif', () => {
            expect(builder.parents).toEqual(vif.victim_primary_guardian_own_parents);
            expect(builder.husband).toEqual(vif.victim_primary_guardian_husband);
            expect(builder.otherRelative).toEqual(vif.victim_primary_guardian_other_relative);
            expect(builder.nonRelative).toEqual(vif.victim_primary_guardian_non_relative);
            expect(builder.noOne).toEqual(vif.victim_primary_guardian_no_one);
        });
        
        it('should set address1 to match vif', () => {
            expect(builder.address1).toEqual(vif.victim_guardian_address1);
        });
        
        it('should set address2 to match vif', () => {
            expect(builder.address2).toEqual(vif.victim_guardian_address2);
        });
        
        it('should set ward to match vif', () => {
            expect(builder.ward).toEqual(vif.victim_guardian_address_ward);
        });
        
        it('should set phoneNumber to match vif', () => {
            expect(builder.phoneNumber).toEqual(vif.victim_guardian_phone);
        });
    });
    
    describe('when building vif, builtVif', () => {
        let builtVif;
        
        beforeEach(() => {
             vif = {
                victim_primary_guardian_own_parents: true,
                victim_primary_guardian_husband: true,
                victim_primary_guardian_other_relative: true,
                victim_primary_guardian_non_relative: true,
                victim_primary_guardian_no_one: true,
                victim_guardian_address1: "Foo",
                victim_guardian_address2: "bar",
                victim_guardian_address_ward: 'ward',
                victim_guardian_phone: '1234567890'
            };
            builder = new PrimaryGuardianBuilder(vif);
            builtVif = builder.build();
        });
        
        it('should match builder guardian options', () => {
            expect(builtVif.victim_primary_guardian_own_parents).toEqual(builder.parents);
            expect(builtVif.victim_primary_guardian_husband).toEqual(builder.husband);
            expect(builtVif.victim_primary_guardian_other_relative).toEqual(builder.otherRelative);
            expect(builtVif.victim_primary_guardian_non_relative).toEqual(builder.nonRelative);
            expect(builtVif.victim_primary_guardian_no_one).toEqual(builder.noOne);
        });
        
        it('should match builder address1', () => {
            expect(builtVif.victim_guardian_address1).toEqual(builder.address1);
        });
        
        it('should match builder address2', () => {
            expect(builtVif.victim_guardian_address2).toEqual(builder.address2);
        });
        
        it('should match builder ward', () => {
            expect(builtVif.victim_guardian_address_ward).toEqual(builder.ward);
        });
        
        it('should match builder phoneNumber', () => {
            expect(builtVif.victim_guardian_phone).toEqual(builder.phoneNumber);
        });
    });
});