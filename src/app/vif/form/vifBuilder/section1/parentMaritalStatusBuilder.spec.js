import ParentMaritalStatusBuilder from './parentMaritalStatusBuilder';

describe('ParentMaritalStatusBuilder', () => {
    
    let builder, vif;    
    
    describe('when no vif in constructor', () => {
        
        it('should set all status options to false', () => {
            builder = new ParentMaritalStatusBuilder();
            
            expect(builder.single).toEqual(false);
            expect(builder.married).toEqual(false);
            expect(builder.widow).toEqual(false);
            expect(builder.fatherHasOtherWives).toEqual(false);
            expect(builder.separated).toEqual(false);
            expect(builder.divorced).toEqual(false);            
        });
    });
    
    describe('when vif passed in constructor', () => {
        it('should set status options to match vif', () => {
            vif = {
                victim_parents_marital_status_single: true,
                victim_parents_marital_status_married: true,
                victim_parents_marital_status_widow: true,
                victim_parents_marital_status_father_has_other_wives: true,
                victim_parents_marital_separated: true,
                victim_parents_marital_divorced: true,                
            };
            
            builder = new ParentMaritalStatusBuilder(vif);
            
            expect(builder.single).toEqual(vif.victim_parents_marital_status_single);
            expect(builder.married).toEqual(vif.victim_parents_marital_status_married);
            expect(builder.widow).toEqual(vif.victim_parents_marital_status_widow);
            expect(builder.fatherHasOtherWives).toEqual(vif.victim_parents_marital_status_father_has_other_wives);
            expect(builder.separated).toEqual(vif.victim_parents_marital_separated);
            expect(builder.divorced).toEqual(vif.victim_parents_marital_divorced);
        });
    });
    
    describe('when building vif', () => {
        it('builtVif should match builder status options', () => {
            vif = {
                victim_parents_marital_status_single: true,
                victim_parents_marital_status_married: true,
                victim_parents_marital_status_widow: true,
                victim_parents_marital_status_father_has_other_wives: true,
                victim_parents_marital_separated: true,
                victim_parents_marital_divorced: true,                
            };
            
            builder = new ParentMaritalStatusBuilder(vif);
            let builtVif = builder.build();
            
            expect(builtVif.victim_parents_marital_status_single).toEqual(builder.single);
            expect(builtVif.victim_parents_marital_status_married).toEqual(builder.married);
            expect(builtVif.victim_parents_marital_status_widow).toEqual(builder.widow);
            expect(builtVif.victim_parents_marital_status_father_has_other_wives).toEqual(builder.fatherHasOtherWives);
            expect(builtVif.victim_parents_marital_separated).toEqual(builder.separated);
            expect(builtVif.victim_parents_marital_divorced).toEqual(builder.divorced);
        });
    });
    
    describe('when', () => {
        
        beforeEach(() => {
            vif = {
                victim_parents_marital_status_single: true,
                victim_parents_marital_status_married: true,
                victim_parents_marital_status_widow: true,
                victim_parents_marital_status_father_has_other_wives: true,
                victim_parents_marital_separated: true,
                victim_parents_marital_divorced: true,                
            };
            
            builder = new ParentMaritalStatusBuilder(vif);
        });
        
        
        describe('single is set', () => {
            it('should set other status options to false', () => {
                builder.single = true;
                
                expect(builder.single).toEqual(true);
                expect(builder.married).toEqual(false);
                expect(builder.widow).toEqual(false);
                expect(builder.fatherHasOtherWives).toEqual(false);
                expect(builder.separated).toEqual(false);
                expect(builder.divorced).toEqual(false);
            });
        });
        
        describe('married is set', () => {
            it('should set other status options to false', () => {
                builder.married = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(true);
                expect(builder.widow).toEqual(false);
                expect(builder.fatherHasOtherWives).toEqual(false);
                expect(builder.separated).toEqual(false);
                expect(builder.divorced).toEqual(false);
            });
        });
        
        describe('widow is set', () => {
            it('should set other status options to false', () => {
                builder.widow = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);
                expect(builder.widow).toEqual(true);
                expect(builder.fatherHasOtherWives).toEqual(false);
                expect(builder.separated).toEqual(false);
                expect(builder.divorced).toEqual(false);
            });
        });
        
        describe('fatherHasOtherWives is set', () => {
            it('should set other status options to false', () => {
                builder.fatherHasOtherWives = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);
                expect(builder.widow).toEqual(false);
                expect(builder.fatherHasOtherWives).toEqual(true);
                expect(builder.separated).toEqual(false);
                expect(builder.divorced).toEqual(false);
            });
        });
        
        describe('separated is set', () => {
            it('should set other status options to false', () => {
                builder.separated = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);
                expect(builder.widow).toEqual(false);
                expect(builder.fatherHasOtherWives).toEqual(false);
                expect(builder.separated).toEqual(true);
                expect(builder.divorced).toEqual(false);
            });
        });
        
        describe('divorced is set', () => {
            it('should set other status options to false', () => {
                builder.divorced = true;
                
                expect(builder.single).toEqual(false);
                expect(builder.married).toEqual(false);
                expect(builder.widow).toEqual(false);
                expect(builder.fatherHasOtherWives).toEqual(false);
                expect(builder.separated).toEqual(false);
                expect(builder.divorced).toEqual(true);
            });
        });
    });
});