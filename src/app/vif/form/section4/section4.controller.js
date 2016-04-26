export default class VifSection4Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;
    this.change_hands = [
        {name: "No", value: 'no'}, 
        {name: "Don't know", value: 'dontKnow'}, 
        {name: "Broker gave money to the companion", value: 'brokerGaveMoney'}, 
        {name: "Companion gave money to the broker", value: 'companionGaveMoney'}
    ];
    this.sect11List = [
        {name: "Sexual Harassment", value: 'sexualHarrassment'}, 
        {name: "Sexual Abuse", value: 'sexualAbuse'}, 
        {name: "Physical Abuse", value: 'physicalAbuse'}, 
        {name: "Threats", value: 'threats'}, 
        {name: "Denied Proper Food", value: 'deniedProperFood'}, 
        {name: "Forced to take Drugs", value: 'forcedToTakeDrugs'}
    ];
    this.travelList = [
        {name: "Tourist Bus", value: 'touristBus'}, 
        {name: "Motorbike", value: 'motorbike'}, 
        {name: "Private Car", value: 'privateCar'}, 
        {name: "Local Bus", value: 'localBus'}, 
        {name: "Microbus", value: 'microbus'}, 
        {name: "Plane", value: 'plane'}
    ];
    this.passportList = [
        {name: "No passport made", value: 'noPassport'},
        {name: "Real passport made", value: 'realPassport'},
        {name: "Passport included a false name", value: 'passportFalseName'},
        {name: "Passport included other false info", value: 'passportFalseInfo'},
        {name: "Passport was false", value: 'passportFalse'}
    ];
  }
}