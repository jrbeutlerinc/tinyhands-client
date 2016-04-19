export default class VifSection5Controller {
  constructor(VifBuilder) {
    'ngInject'
    this.vif = VifBuilder;
    this.sect1Options = ["Yes", "No", "Meeting Broker", "Meeting Companion"];
  }
}