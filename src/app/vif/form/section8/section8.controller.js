export default class VifSection8Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;
    this.sect2Options = ["No trafficking suspected", "Police say not enough information", "Trafficker is victim's own people",
      "She was going herself", "Trafficker ran away", "Victim afraid of reputation", "Victim afraid for her safety",
      "Family afraid of reputation", "Family afraid for safety", "Police bribed by trafficker", "Victim / family bribed by trafficker"];
    this.sect3Options = ["Plans to send the girl home to stay with her guardians", "Plan to send the girl to stay with other relatives",
      "Tiny Hands needs to help her find another place to go", "Contact THN's Aftercare Coordinator"];
  }
}