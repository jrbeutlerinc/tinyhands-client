import CasteBuilder from './casteBuilder';

describe('CasteBuilder', () => {
    
    let builder;
    
    describe('when constructed with no vif', () => {
        beforeEach(() => {
            builder = new CasteBuilder();
        })
        
        it('should set all options to false', () => {            
            expect(builder.magar).toEqual(false);
            expect(builder.brahmin).toEqual(false);
            expect(builder.tamang).toEqual(false);
            expect(builder.jaisi).toEqual(false);
            expect(builder.chhetri).toEqual(false);
            expect(builder.mongolian).toEqual(false);
            expect(builder.thakuri).toEqual(false);
            expect(builder.newar).toEqual(false);
            expect(builder.muslim).toEqual(false);
            expect(builder.madeshiTerai).toEqual(false);
            expect(builder.dalitUnderPriviledged).toEqual(false);
            expect(builder.other).toEqual(false);
        });
        
        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual('');
        });
    });
    
    
    describe('when constructed with vif', () => {
        
        let vif;
        
        beforeEach(() => {
            vif = {
                victim_caste_magar: true,
                victim_caste_brahmin: true,
                victim_caste_tamang: true,
                victim_caste_jaisi: true,
                victim_caste_chhetr: true,
                victim_caste_mongolian: true,
                victim_caste_thakuri: true,
                victim_caste_newar: true,
                victim_caste_muslim: true,
                victim_caste_madeshiTerai: true,
                victim_caste_dalit: true,
                victim_caste_other: true,
                victim_caste_other_value: "Foo"
           }
           
           builder = new CasteBuilder(vif); 
        });
        
        it('should set caste option values to match vif', () => {
            expect(builder.magar).toEqual(vif.victim_caste_magar);
            expect(builder.brahmin).toEqual(vif.victim_caste_brahmin);
            expect(builder.tamang).toEqual(vif.victim_caste_tamang);
            expect(builder.jaisi).toEqual(vif.victim_caste_jaisi);
            expect(builder.chhetri).toEqual(vif.victim_caste_chhetr);
            expect(builder.mongolian).toEqual(vif.victim_caste_mongolian);
            expect(builder.thakuri).toEqual(vif.victim_caste_thakuri);
            expect(builder.newar).toEqual(vif.victim_caste_newar);
            expect(builder.muslim).toEqual(vif.victim_caste_muslim);
            expect(builder.madeshiTerai).toEqual(vif.victim_caste_madeshiTerai);
            expect(builder.dalitUnderPriviledged).toEqual(vif.victim_caste_dalit);
            expect(builder.other).toEqual(vif.victim_caste_other);
        });
        
        it('should set other text to match vif', () => {
            expect(builder.otherText).toEqual(vif.victim_caste_other_value);
        });
    });
    
    describe('when building vif', () => {
        beforeEach(() => {
            let vif = {
                victim_caste_magar: true,
                victim_caste_brahmin: true,
                victim_caste_tamang: true,
                victim_caste_jaisi: true,
                victim_caste_chhetr: true,
                victim_caste_mongolian: true,
                victim_caste_thakuri: true,
                victim_caste_newar: true,
                victim_caste_muslim: true,
                victim_caste_madeshiTerai: true,
                victim_caste_dalit: true,
                victim_caste_other: true,
                victim_caste_other_value: "Foo"
           }
           
           builder = new CasteBuilder(vif); 
        });
        
        it('should set correct values on built vif', () => {
           let builtVif = builder.build();
           
            expect(builder.magar).toEqual(builder.magar);
            expect(builder.brahmin).toEqual(builder.brahmin);
            expect(builder.tamang).toEqual(builder.tamang);
            expect(builder.jaisi).toEqual(builder.jaisi);
            expect(builder.chhetri).toEqual(builder.chhetri);
            expect(builder.mongolian).toEqual(builder.mongolian);
            expect(builder.thakuri).toEqual(builder.thakuri);
            expect(builder.newar).toEqual(builder.newar);
            expect(builder.muslim).toEqual(builder.muslim);
            expect(builder.madeshiTerai).toEqual(builder.madeshiTerai);
            expect(builder.dalitUnderPriviledged).toEqual(builder.dalitUnderPriviledged);
            expect(builder.other).toEqual(builder.other);
            expect(builtVif.victim_caste_other_value).toEqual(builder.otherText);
        });
        
    });
    
    describe('when', () => {      
        
        beforeEach(() => {
            let vif = {
                victim_caste_magar: true,
                victim_caste_brahmin: true,
                victim_caste_tamang: true,
                victim_caste_jaisi: true,
                victim_caste_chhetr: true,
                victim_caste_mongolian: true,
                victim_caste_thakuri: true,
                victim_caste_newar: true,
                victim_caste_muslim: true,
                victim_caste_madeshiTerai: true,
                victim_caste_dalit: true,
                victim_caste_other: true,
                victim_caste_other_value: "Foo"
           }
           
           builder = new CasteBuilder(vif); 
        });
        
        describe('magar is set to true', () => {
            it('should set all other values to false', () => {
                builder.magar = true;
                
                expect(builder.magar).toEqual(true);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('brahmin is set to true', () => {
            it('should set all other values to false', () => {
                builder.brahmin = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(true);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('tamang is set to true', () => {
            it('should set all other values to false', () => {
                builder.tamang = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(true);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('jaisi is set to true', () => {
            it('should set all other values to false', () => {
                builder.jaisi = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(true);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('chhetri is set to true', () => {
            it('should set all other values to false', () => {
                builder.chhetri = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(true);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('mongolian is set to true', () => {
            it('should set all other values to false', () => {
                builder.mongolian = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(true);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('thakuri is set to true', () => {
            it('should set all other values to false', () => {
                builder.thakuri = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(true);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('newar is set to true', () => {
            it('should set all other values to false', () => {
                builder.newar = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(true);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('muslim is set to true', () => {
            it('should set all other values to false', () => {
                builder.muslim = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(true);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('madeshiTerai is set to true', () => {
            it('should set all other values to false', () => {
                builder.madeshiTerai = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(true);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('dalitUnderPriviledged is set to true', () => {
            it('should set all other values to false', () => {
                builder.dalitUnderPriviledged = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('other is set to true', () => {
            it('should set all other values to false', () => {
                builder.other = true;
                
                expect(builder.magar).toEqual(false);
                expect(builder.brahmin).toEqual(false);
                expect(builder.tamang).toEqual(false);
                expect(builder.jaisi).toEqual(false);
                expect(builder.chhetri).toEqual(false);
                expect(builder.mongolian).toEqual(false);
                expect(builder.thakuri).toEqual(false);
                expect(builder.newar).toEqual(false);
                expect(builder.muslim).toEqual(false);
                expect(builder.madeshiTerai).toEqual(false);
                expect(builder.dalitUnderPriviledged).toEqual(false);
                expect(builder.other).toEqual(true);
            });
        });
        
        describe('otherText is set',() => {
            it('should change text', () => {
                let text = "Foo";
                builder.otherText = text;
                
                expect(builder.otherText).toEqual(text); 
            });
        });
    });
});