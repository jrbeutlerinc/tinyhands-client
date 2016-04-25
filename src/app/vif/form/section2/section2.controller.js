export default class VifSection2Controller {
  constructor(VifBuilder) {
    'ngInject'
    this.vif = VifBuilder;
    this.gulfLocations = ["Lebanon", "Dubai", "Saudi Arabia", "Kuwait", "Malaysia", "Oman", "Qatar", "Did Not Know"];
    this.indiaLocations = ["Delhi", "Mumbai", "Surat", "Rajastan", "Kolkata", "Pune", "Jaipur", "Bihar", "Did Not Know"];
    this.sect1Options = ["Education", "Travel / Tour", "Shopping", "Eloping", "Arranged Marriage", "Meet your own family", "Visit broker's home", "Medical treatment",
      "Job - Broker did not say what job", "Job - Baby Care", "Job - Factory", "Job - Hotel", "Job - Shop", "Job - Laborer", "Job - Brothel", "Job - Household"];
    this.sect2Options = ["Support myself", "Support family", "Personal debt", "Family debt", "Love / Marriage", "Bad home / marriage", "Get an education",
      "Tour / Travel", "Didn't know I was going abroad"];
    
    this.gulfLocations = [
        {name: "Lebanon", value: 'lebanon'},
        {name: "Dubai", value: 'dubai'}, 
        {name: "Saudi Arabia", value: 'saudiarabia'}, 
        {name: "Kuwait", value: 'kuwait'}, 
        {name: "Malaysia", value: 'malaysia'}, 
        {name: "Oman", value: 'oman'}, 
        {name: "Qatar", value: 'qatar'}, 
        {name: "Did Not Know", value: 'didnotknow'}
    ];
    
    this.indiaLocations = [
        {name: "Delhi", value: 'delhi'},
        {name: "Mumbai", value: 'mumbai'}, 
        {name: "Surat", value: 'surat'}, 
        {name: "Rajastan", value: 'rajastan'}, 
        {name: "Kolkata", value: 'kolkata'}, 
        {name: "Pune", value: 'pune'}, 
        {name: "Jaipur", value: 'jaipur'}, 
        {name: "Bihar", value: 'bihar'}, 
        {name: "Did Not Know", value: 'didnotknow'}
    ];
    
    this.indiaLocations = [
        {name: "Education", value: 'education'}, 
        {name: "Travel / Tour", value: 'traveltour'}, 
        {name: "Shopping", value: 'shopping'}, 
        {name: "Eloping", value: 'eloping'}, 
        {name: "Arranged Marriage", value: 'arrangedmarriage'}, 
        {name: "Meet your own family", value: 'meetyourownfamily'}, 
        {name: "Visit broker's home", value: 'visitbrokershome'}, 
        {name: "Medical treatment", value: 'medicaltreatment'}, 
        {name: "Job - Broker did not say what job", value: 'jobbrokerdidnotsaywhatjob'}, 
        {name: "Job - Baby Care", value: 'jobbabycare'}, 
        {name: "Job - Factory", value: 'jobfactory'}, 
        {name: "Job - Hotel", value: 'jobhotel'}, 
        {name: "Job - Shop", value: 'jobshop'}, 
        {name: "Job - Laborer", value: 'joblaborer'}, 
        {name: "Job - Brothel", value: 'jobbrothel'}, 
        {name: "Job - Household", value: 'jobhousehold'},
    ];
    
    this.sect2Options = [
      {name: "Support myself", value: 'supportmyself'},
      {name: "Support family", value: 'supportfamily'},
      {name: "Personal debt", value: 'personaldebt'},
      {name: "Family debt", value: 'familydebt'},
      {name: "Love / Marriage", value: 'lovemarriage'},
      {name: "Bad home / marriage", value: 'badhomemarriage'},
      {name: "Get an education", value: 'getaneducation'},
      {name: "Tour / Travel", value: 'tourtravel'},
      {name: "Didn't know I was going abroad", value: 'didntknowiwasgoingabroad'}
    ];
  }
}