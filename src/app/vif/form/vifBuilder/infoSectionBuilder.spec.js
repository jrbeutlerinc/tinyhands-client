import InfoSectionBuilder from './infoSectionBuilder';

describe('InfoSectionBuilder', () => {
    let builder, vif;
    
    describe('when no vif is null', () => {
       
       beforeEach(() => {
           builder = new InfoSectionBuilder(null);
       });
       
       it('should set vifNumber to blank string', () => {
           expect(builder.vifNumber).toEqual(''); 
       });
       
       it('should set date to blank string', () => {
           expect(builder.date).toEqual(''); 
       });
       
       it('should set numberOfVictims to 0', () => {
           expect(builder.numberOfVictims).toEqual(0); 
       });
       
       it('should set numberOfTraffickers to 0', () => {
           expect(builder.numberOfTraffickers).toEqual(0); 
       });
       
       it('should set location to blank string', () => {
           expect(builder.location).toEqual(''); 
       });
       
       it('should set interviewer to blank string', () => {
           expect(builder.interviewer).toEqual(''); 
       });
       
       it('should set statementReadBeforeInterview to false', () => {
           expect(builder.statementReadBeforeInterview).toEqual(false); 
       });
       
       it('should set photoPermission to false', () => {
           expect(builder.photoPermission).toEqual(false); 
       });
    });
    
    describe('when vif is not null', () => {
       beforeEach(() => {
           vif = {
               vif_number: 'BHD123',
               date: '11-11-2011',
               number_of_victims: 2,
               number_of_traffickers: 3,
               location: 'Nepal',
               interviewer: 'Bob',
               statement_read_before_beginning: true,
               permission_to_use_photo: true
           }
           
           builder = new InfoSectionBuilder(vif);
       });
       
       it('should set vifNumber to equal vif.vif_number', () => {
           expect(builder.vifNumber).toEqual(vif.vif_number); 
       });
       
       it('should set date to equal vif.date', () => {
           expect(builder.date).toEqual(vif.date); 
       });
       
       it('should set numberOfVictims to equal vif.number_of_victims', () => {
           expect(builder.numberOfVictims).toEqual(vif.number_of_victims); 
       });
       
       it('should set numberOfTraffickers to equal vif.number_of_traffickers', () => {
           expect(builder.numberOfTraffickers).toEqual(vif.number_of_traffickers); 
       });
       
       it('should set location to equal vif.location', () => {
           expect(builder.location).toEqual(vif.location); 
       });
       
       it('should set interviewer to equal vif.interviewer', () => {
           expect(builder.interviewer).toEqual(vif.interviewer); 
       });
       
       it('should set statementReadBeforeInterview to equal vif.statement_read_before_beginning', () => {
           expect(builder.statementReadBeforeInterview).toEqual(vif.statement_read_before_beginning); 
       });
       
       it('should set photoPermission to equal vif.permission_to_use_photo', () => {
           expect(builder.photoPermission).toEqual(vif.permission_to_use_photo); 
       });
    });
});