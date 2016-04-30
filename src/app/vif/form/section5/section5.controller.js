export default class VifSection5Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder.section5;

    this.noYesList = [
        {name: "No", value: false},
        {name: "Yes", value: true}
    ];

    this.sect1Options = [
        {name: "Yes", value: "yes"},
        {name: "No", value: "no"},
        {name: "Meeting Broker", value: "meetingBroker"},
        {name: "Meeting Companion", value: "meetingCompanion"}
    ];
  }
}