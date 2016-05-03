export default class VifSection4Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;

    this.change_hands = [
        {name: "No", value: "no"},
        {name: "Don't know", value: "doNotKnow"},
        {name: "Broker gave money to the companion", value: "gaveMoneyToCompanion"},
        {name: "Companion gave money to the broker", value: "gaveMoneyToBroker"}
    ];

    this.noYesList = [
        {name: "No", value: "no"},
        {name: "Yes", value: "yes"}
    ];

    this.sect1List = [
        {name: "Sexual Harassment", value: "sexualHarassment"},
        {name: "Sexual Abuse", value: "sexualAbuse"},
        {name: "Physical Abuse", value: "physicalAbuse"},
        {name: "Threats", value: "threats"},
        {name: "Denied Proper Food", value: "deniedProperFood"},
        {name: "Forced to take Drugs", value: "forcedToTakeDrugs"}
    ];

    this.travelList = [
        {name: "Tourist Bus", value: "touristBus"},
        {name: "Motorbike", value: "motorbike"},
        {name: "Private Car", value: "privateCar"},
        {name: "Local Bus", value: "localBus"},
        {name: "Microbus", value: "microbus"},
        {name: "Plane", value: "plane"}
    ];

    this.yesNoList = [
        {name: "Yes", value: "yes"},
        {name: "No", value: "no"}
    ];
  }
}