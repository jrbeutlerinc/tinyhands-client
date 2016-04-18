export default class VifSection7Controller {
  constructor(VifBuilder) {
    'ngInject'
    this.vif = VifBuilder;
    this.alarms = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.totalAlarms = 0;
  }

  calculateAlarms() {
    console.log(this.alarms);
//    this.totalAlarms = 0;
//    for (var i = 0; i < this.alarms.length; i++) {
//        this.totalAlarms += alarms[i];
//    }
  }
}