import IsLiterateBuilder from './isLiterateBuilder';

describe('IsLiterateBuilder', () => {
    
    let builder;
    
    describe('when no vif in constructor', () => {
        
        beforeEach(() => {
            builder = new IsLiterateBuilder(); 
        });
        
        it('should set isLiterate to false ', () => {
            expect(builder.isLiterate).toEqual(false);
        });
        
        it('should set isNotLiterate to false', () => {
            expect(builder.isNotLiterate).toEqual(false);
        });
    });
    
    describe('when vif in constructor', () => {
        
        describe('and victim is literate', () => {
            
            beforeAll(() => {
                let vif = {
                    victim_is_literate: true
                };
                builder = new IsLiterateBuilder(vif); 
            });
            
            it('should set isLiterate to true', () => {
                expect(builder.isLiterate).toEqual(true);
            });
            
            it('should set isNotLiterate to true', () => {
                expect(builder.isNotLiterate).toEqual(false);
            });
        });
        
        describe('and victim is not literate', () => {
            
            beforeAll(() => {
                let vif = {
                    victim_is_literate: false
                };
                builder = new IsLiterateBuilder(vif); 
            });
            
            it('should set isNotLiterate to true', () => {
                expect(builder.isNotLiterate).toEqual(true);
            });
            
            it('should set isLiterate to true', () => {
                expect(builder.isLiterate).toEqual(false);
            });
        });
    });
    
    describe('when building vif', () => {
         
         describe('and victim is literate', () => {
            
            beforeAll(() => {
                let vif = {
                    victim_is_literate: true
                };
                builder = new IsLiterateBuilder(vif); 
            });
            
            it('should set victim_is_literate to true', () => {
                let builtVif = builder.build();
                
                expect(builtVif.victim_is_literate).toEqual(true);
            });
        });
        
        describe('and victim is not literate', () => {
            
            beforeAll(() => {
                let vif = {
                    victim_is_literate: false
                };
                builder = new IsLiterateBuilder(vif); 
            });
            
            it('should set victim_is_literate to false', () => {
                let builtVif = builder.build();
                
                expect(builtVif.victim_is_literate).toEqual(false);
            });
        });
        
        describe('and no selection set', () => {
            
            beforeAll(() => {
                builder = new IsLiterateBuilder(); 
            });
            
            it('should set victim_is_literate to null', () => {
                let builtVif = builder.build();
                
                expect(builtVif.victim_is_literate).toEqual(null);
            });
        }); 
    });
    
    describe('when isLiterate set to true', () => {
        it('should set isNotLiterate to false', () => {
            let vif = {
                victim_is_literate: false
            };
            builder = new IsLiterateBuilder(vif);
            builder.isLiterate = true;
            
            expect(builder.isNotLiterate).toEqual(false);   
        });
    });
    
    describe('when isNotLiterate set to true', () => {
        it('should set isLiterate to false', () => {
            let vif = {
                victim_is_literate: true
            };
            builder = new IsLiterateBuilder(vif);
            builder.isNotLiterate = true;
            
            expect(builder.isLiterate).toEqual(false);   
        });
    });
});