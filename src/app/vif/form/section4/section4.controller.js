export default class VifSection4Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;
    this.change_hands = ["No", "Don't know", "Broker gave money to the companion", "Companion gave money to the broker"];
    this.sect11List = ["Sexual Harassment", "Sexual Abuse", "Physical Abuse", "Threats", "Denied Proper Food", "Forced to take Drugs"];
    this.travelList = ["Tourist Bus", "Motorbike", "Private Car", "Local Bus", "Microbus", "Plane"];
  }
}