import DesitinationBuilder from './destinationBuilder';

describe('DesitinationBuilder', () => {
    let builder,
        mockIndiaBuilder,
        mockGulfBuilder;
    
    
    describe('when building vif', () => {
        
        beforeEach(() => {
            mockIndiaBuilder = jasmine.createSpyObj('mockIndiaBuilder', ['build']);
            mockGulfBuilder = jasmine.createSpyObj('mockGulfBuilder', ['build']);
            builder = new DesitinationBuilder(null, mockIndiaBuilder, mockGulfBuilder); 
        });
        
        it('should call build on indiaBuilder', () => {
            builder.build();
            
            expect(mockIndiaBuilder.build).toHaveBeenCalled();
        });
        
        it('should call build on gulfBuilder', () => {
            builder.build();
            
            expect(mockGulfBuilder.build).toHaveBeenCalled();
        });
    });
});