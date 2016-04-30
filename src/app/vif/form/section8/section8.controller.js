export default class VifSection8Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder.section8;
    this.sect2Options = [
      {name: "No trafficking suspected", value: "noTraffickingSuspected"},
      {name: "Police say not enough information", value: "notEnoughInfo"},
      {name: "Trafficker is victim's own people", value: "victimsOwnPeople"},
      {name: "She was going herself", value: "goingHerself"},
      {name: "Trafficker ran away", value: "ranAway"},
      {name: "Victim afraid of reputation", value: "victimAfraidForReputation"},
      {name: "Victim afraid for her safety", value: "victimAfraidForSafety"},
      {name: "Family afraid of reputation", value: "familyAfraidForReputation"},
      {name: "Family afraid for safety", value: "familyAfraidForSafety"},
      {name: "Police bribed by trafficker", value: "policeBribed"},
      {name: "Victim / family bribed by trafficker", value: "victimFamilyBribed"},
      {name: "Interference by powerful people", value: "interferencePowerfulPeople"}
    ];
    this.sect3Options = [
      {name: "Plans to send the girl home to stay with her guardians", value: "stayWithGuardians"},
      {name: "Plan to send the girl to stay with other relatives", value: "stayWithOtherRelatives"},
      {name: "Tiny Hands needs to help her find another place to go", value: "anotherPlace"},
      {name: "Contact THN's Aftercare Coordinator", value: "contactAftercare"}
    ];

    this.getVif = function() {
      console.log(this.vif);
    }
  }
}