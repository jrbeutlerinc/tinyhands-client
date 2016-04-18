export default class VifSection7Controller {
  constructor(VifBuilder) {
    'ngInject'
    this.vif = VifBuilder;
    this.alarms = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.reportedAlarms = 0;
    this.calculatedAlarms = 0;
  }

  calculateAlarms(idx, numAlarms) {
    this.alarms[idx] = numAlarms;
    this.calculatedAlarms = 0;
    for (var i = 0; i < this.alarms.length; i++) {
        this.calculatedAlarms += parseInt(this.alarms[i]);
    }
  }

  shouldSendHome() {
    return this.reportedAlarms < 10 && this.calculatedAlarms < 10;
  }
}