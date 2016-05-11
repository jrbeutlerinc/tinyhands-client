import MaritalStatusBuilder from './maritalStatusBuilder';

describe('MaritalStatusBuilder', () => {
    let builder, vif;
    
    describe('when no vif in constructor', () => {
        
        it('should set all options to false', () => {
            builder = new MaritalStatusBuilder();
            
            expect(builder.single).toEqual(false);
            expect(builder.married).toEqual(false);    
            expect(builder.widow).toEqual(false);    
            expect(builder.divorced).toEqual(false);    
            expect(builder.husbandHasOtherWives).toEqual(false);    
            expect(builder.abandonedByHusband).toEqual(false);                    
        });
    });
    
    describe('when vif passed in constructor', () => {
        it('should set options to match vif', () => {
            vif = {
               victim_marital_status_single: true,
               victim_marital_status_married: true, 
               victim_marital_status_widow: true, 
               victim_marital_status_divorced: true, 
               victim_marital_status_husband_has_other_wives: true, 
               victim_marital_status_abandoned_by_husband: true                 
            }
            builder = new MaritalStatusBuilder(vif);
            
            expect(builder.single).toEqual(vif.victim_marital_status_single);
            expect(builder.married).toEqual(vif.victim_marital_status_married);    
            expect(builder.widow).toEqual(vif.victim_marital_status_widow);    
            expect(builder.divorced).toEqual(vif.victim_marital_status_divorced);    
            expect(builder.husbandHasOtherWives).toEqual(vif.victim_marital_status_husband_has_other_wives);    
            expect(builder.abandonedByHusband).toEqual(vif.victim_marital_status_abandoned_by_husband);
        });
    });
    
    describe('when building vif', () => {
        it('built vif should match builder properties', () => {
            vif = {
               victim_marital_status_single: true,
               victim_marital_status_married: true, 
               victim_marital_status_widow: true, 
               victim_marital_status_divorced: true, 
               victim_marital_status_husband_has_other_wives: true, 
               victim_marital_status_abandoned_by_husband: true                 
            }
            builder = new MaritalStatusBuilder(vif);
            let builtVif = builder.build();
            
            expect(builtVif.victim_marital_status_single).toEqual(builder.single);
            expect(builtVif.victim_marital_status_married).toEqual(builder.married);    
            expect(builtVif.victim_marital_status_widow).toEqual(builder.widow);    
            expect(builtVif.victim_marital_status_divorced).toEqual(builder.divorced);    
            expect(builtVif.victim_marital_status_husband_has_other_wives).toEqual(builder.husbandHasOtherWives);    
            expect(builtVif.victim_marital_status_abandoned_by_husband).toEqual(builder.abandonedByHusband);
        });
    });
    
    describe('when', () => {
        beforeEach(() => {
           vif = {
               victim_marital_status_single: true,
               victim_marital_status_married: true, 
               victim_marital_status_widow: true, 
               victim_marital_status_divorced: true, 
               victim_marital_status_husband_has_other_wives: true, 
               victim_marital_status_abandoned_by_husband: true                 
            }
            builder = new MaritalStatusBuilder(vif);
        });
        
        describe('single is set to true', () => {
            it('should set other options to false', () => {
                builder.single = true;
                
                expect(builder.single).toEqual(true);
                expect(builder.married).toEqual(false);    
                expect(builder.widow).toEqual(false);    
                expect(builder.divorced).toEqual(false);    
                expect(builder.husbandHasOtherWives).toEqual(false);    
                expect(builder.abandonedByHusband).toEqual(false);
            });
        });
        
        describe('married is set to true', () => {
            it('should set other options to false', () => {
                builder.married = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(true);    
                expect(builder.widow).toEqual(false);    
                expect(builder.divorced).toEqual(false);    
                expect(builder.husbandHasOtherWives).toEqual(false);    
                expect(builder.abandonedByHusband).toEqual(false);
            });
        });
        
        describe('widow is set to true', () => {
            it('should set other options to false', () => {
                builder.widow = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);    
                expect(builder.widow).toEqual(true);    
                expect(builder.divorced).toEqual(false);    
                expect(builder.husbandHasOtherWives).toEqual(false);    
                expect(builder.abandonedByHusband).toEqual(false);
            });
        });
        
        describe('divorced is set to true', () => {
            it('should set other options to false', () => {
                builder.divorced = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);    
                expect(builder.widow).toEqual(false);    
                expect(builder.divorced).toEqual(true);    
                expect(builder.husbandHasOtherWives).toEqual(false);    
                expect(builder.abandonedByHusband).toEqual(false);
            });
        });
        
        describe('husbandHasOtherWives is set to true', () => {
            it('should set other options to false', () => {
                builder.husbandHasOtherWives = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);    
                expect(builder.widow).toEqual(false);    
                expect(builder.divorced).toEqual(false);    
                expect(builder.husbandHasOtherWives).toEqual(true);    
                expect(builder.abandonedByHusband).toEqual(false);
            });
        });
        
        describe('abandonedByHusband is set to true', () => {
            it('should set other options to false', () => {
                builder.abandonedByHusband = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);    
                expect(builder.widow).toEqual(false);    
                expect(builder.divorced).toEqual(false);    
                expect(builder.husbandHasOtherWives).toEqual(false);    
                expect(builder.abandonedByHusband).toEqual(true);
            });
        });
    });
    
});
