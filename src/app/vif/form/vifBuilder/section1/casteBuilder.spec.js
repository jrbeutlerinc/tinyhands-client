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
    
});