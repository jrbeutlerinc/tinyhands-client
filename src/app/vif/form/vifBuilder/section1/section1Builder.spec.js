import Section1Builder from './section1Builder';

describe('Section1Builder', () => {
    
    let builder;
    
    describe('when no vif given in constructor', () => {
        
        beforeEach(() => {
            builder = new Section1Builder();
        });
        
        it('should set name to empty string', () => {
            expect(builder.name).toEqual('');
        });
        
        it('should set _gender to null', () => {
            expect(builder._gender).toEqual(null);
        });
        
        it('should set address1 to null', () => {
            expect(builder.address1).toEqual(null)
        });
        
        it('should set address2 to null', () => {
            expect(builder.address2).toEqual(null);
        });
        
        it('should set ward to empty string', () => {
            expect(builder.ward).toEqual('');
        });
        
        it('should set phone to empty string', () => {
            expect(builder.phone).toEqual('');
        });
           
        it('should set height to null', () => {
            expect(builder.height).toEqual(null);
        });   
        
        it('should set weight to null', () => {
            expect(builder.weight).toEqual(null);
        });
        
        it('should set numInFamily to null', () => {
            expect(builder.numInFamily).toEqual(null);
        });
       
    });
    
    describe('when vif passed in constructor', () => {
        let builder, vif;
        
        beforeEach(() => {
            vif = {
                victim_name: 'Sally',
                victim_gender: 'female',
                victim_address1: 'BHD',
                victim_address2: 'Foo',
                victim_address_ward: 'Bar',
                victim_phone: '123-456-7890',
                victim_age: '21',
                victim_height: 5,
                victim_weight: 55,
                victim_num_in_family: 3
            }
            builder = new Section1Builder(vif);
        });
        
        it('should set name to equal vif.victim_name', () => {
            expect(builder.name).toEqual(vif.victim_name);
        });
        
        it('should set _gender to equal vif.victim_gender', () => {
            expect(builder._gender).toEqual(vif.victim_gender);
        });
        
        it('should set address1 to equal vif.victim_address1', () => {
            expect(builder.address1).toEqual(vif.victim_address1);
        });
        
        it('should set address2 to equal vif.victim_address2', () => {
            expect(builder.address2).toEqual(vif.victim_address2);
        });
        
        it('should set ward to equal vif.victim_address_ward', () => {
            expect(builder.ward).toEqual(vif.victim_address_ward);
        });
        
        it('should set phone to equal vif.victim_phone', () => {
            expect(builder.phone).toEqual(vif.victim_phone);
        });
        
        it('should set age to equal vif.victim_age', () => {
            expect(builder.age).toEqual(vif.victim_age);
        });
        
        it('should set height to equal vif.victim_height', () => {
            expect(builder.height).toEqual(vif.victim_height);
        });
        
        it('should set weight to equal vif.victim_weight', () => {
            expect(builder.weight).toEqual(vif.victim_weight);
        });
        
        it('should set numInFamily to equal vif.victim_num_in_family', () => {
            expect(builder.numInFamily).toEqual(vif.victim_num_in_family);
        });
    });
    
    describe('build', () => {
        
        let builder,
            vif,
            casteBuilder,
            occupationBuilder,
            maritalStatusBuilder,
            livesWithBuilder,
            primaryGuardianBuilder,
            parentMaritalStatusBuilder,
            educationLevelBuilder,
            literacyBuilder;
        
        beforeAll(() => {
            vif = {
                victim_name: 'Sally',
                victim_gender: 'female',
                victim_address1: 'BHD',
                victim_address2: 'Foo',
                victim_address_ward: 'Bar',
                victim_phone: '123-456-7890',
                victim_age: '21',
                victim_height: 5,
                victim_weight: 55,
                victim_num_in_family: 3
            }
            casteBuilder = new jasmine.createSpyObj('casteBuilder', ['build']);
            occupationBuilder = new jasmine.createSpyObj('occupationBuilder', ['build']);
            maritalStatusBuilder = new jasmine.createSpyObj('maritalStatusBuilder', ['build']);
            livesWithBuilder = new jasmine.createSpyObj('livesWithBuilder', ['build']);
            primaryGuardianBuilder = new jasmine.createSpyObj('primaryGuardianBuilder', ['build']);
            parentMaritalStatusBuilder = new jasmine.createSpyObj('parentMaritalStatusBuilder', ['build']);
            educationLevelBuilder = new jasmine.createSpyObj('educationLevelBuilder', ['build']);
            literacyBuilder = new jasmine.createSpyObj('literacyBuilder', ['build']);
            
            builder = new Section1Builder(vif, casteBuilder, occupationBuilder, maritalStatusBuilder, 
                livesWithBuilder, primaryGuardianBuilder, parentMaritalStatusBuilder, educationLevelBuilder, literacyBuilder);
        });
        
        it('should call build on casteBuilder', () => {
            builder.build();
            
            expect(casteBuilder.build).toHaveBeenCalled();
        });
    });
    
   
    
});