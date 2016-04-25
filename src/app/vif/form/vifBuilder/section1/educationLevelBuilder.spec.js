import EducationLevelBuilder from './educationLevelBuilder';

describe('EducationLevelBuilder', () => {
    let builder;
    let vif = {
        victim_education_level_none: true,
        victim_education_level_informal: true,
        victim_education_level_primary: true,
        victim_education_level_grade_4_8: true,
        victim_education_level_grade_9_10: true,
        victim_education_level_slc: true,
        victim_education_level_11_12: true,
        victim_education_level_bachelors: true,
        victim_education_level_masters: true,
    };
   
    describe('when no vif in constructor', () => {
        
        it('should set all education options to false', () => {
            builder = new EducationLevelBuilder();
            
            expect(builder.none).toEqual(false);
            expect(builder.informal).toEqual(false);
            expect(builder.primary).toEqual(false);
            expect(builder.grade4to8).toEqual(false);
            expect(builder.grade9to10).toEqual(false);
            expect(builder.slc).toEqual(false);
            expect(builder.grade11to12).toEqual(false);
            expect(builder.bachelors).toEqual(false);
            expect(builder.masters).toEqual(false);
        });
    });

    describe('when vif passed in constructor', () => {
        
        it('should set education levels to match vif', () => {
            builder = new EducationLevelBuilder(vif);
            
            expect(builder.none).toEqual(true);
            expect(builder.informal).toEqual(true);
            expect(builder.primary).toEqual(true);
            expect(builder.grade4to8).toEqual(true);
            expect(builder.grade9to10).toEqual(true);
            expect(builder.slc).toEqual(true);
            expect(builder.grade11to12).toEqual(true);
            expect(builder.bachelors).toEqual(true);
            expect(builder.masters).toEqual(true);
        });
    });

    describe('when building vif', () => {
        
        it('should set correct values on built vif ', () => {
            
            builder = new EducationLevelBuilder(vif);
            let builtVif = builder.build();
            
            expect(builtVif.victim_education_level_none).toEqual(true);
            expect(builtVif.victim_education_level_informal).toEqual(true);
            expect(builtVif.victim_education_level_primary).toEqual(true);
            expect(builtVif.victim_education_level_grade_4_8).toEqual(true);
            expect(builtVif.victim_education_level_grade_9_10).toEqual(true);
            expect(builtVif.victim_education_level_slc).toEqual(true);
            expect(builtVif.victim_education_level_11_12).toEqual(true);
            expect(builtVif.victim_education_level_bachelors).toEqual(true);
            expect(builtVif.victim_education_level_masters).toEqual(true);
        });
    });
    
    describe('when', () => {
        
        beforeEach(() => {
            builder = new EducationLevelBuilder(vif);
        });
        
        describe('builder.none is set to true', () => {
            it('should set other education levels to false', () => {
                builder.none = true;
                
                expect(builder.none).toEqual(true);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.informal is set to true', () => {
            it('should set other education levels to false', () => {
                builder.informal = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(true);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.primary is set to true', () => {
            it('should set other education levels to false', () => {
                builder.primary = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(true);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.grade4to8 is set to true', () => {
            it('should set other education levels to false', () => {
                builder.grade4to8 = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(true);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.grade9to10 is set to true', () => {
            it('should set other education levels to false', () => {
                builder.grade9to10 = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(true);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.slc is set to true', () => {
            it('should set other education levels to false', () => {
                builder.slc = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(true);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.grade11to12 is set to true', () => {
            it('should set other education levels to false', () => {
                builder.grade11to12 = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(true);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.bachelors is set to true', () => {
            it('should set other education levels to false', () => {
                builder.bachelors = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(true);
                expect(builder.masters).toEqual(false);
            });
        });
        
        describe('builder.masters is set to true', () => {
            it('should set other education levels to false', () => {
                builder.masters = true;
                
                expect(builder.none).toEqual(false);
                expect(builder.informal).toEqual(false);
                expect(builder.primary).toEqual(false);
                expect(builder.grade4to8).toEqual(false);
                expect(builder.grade9to10).toEqual(false);
                expect(builder.slc).toEqual(false);
                expect(builder.grade11to12).toEqual(false);
                expect(builder.bachelors).toEqual(false);
                expect(builder.masters).toEqual(true);
            });
        });
        
    });
    
});