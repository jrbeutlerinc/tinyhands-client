export default class VifSection5Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;

    this.noYesList = [
        {name: "No", value: "no"},
        {name: "Yes", value: "yes"}
    ];

    this.sect1Options = [
        {name: "Yes", value: "yes"},
        {name: "No", value: "no"},
        {name: "Meeting Broker", value: "meetingBroker"},
        {name: "Meeting Companion", value: "meetingCompanion"}
    ];

    this.yesNoList = [
        {name: "Yes", value: "yes"},
        {name: "No", value: "no"}
    ];
  }
}