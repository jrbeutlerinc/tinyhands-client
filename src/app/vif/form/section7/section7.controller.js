export default class VifSection7Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder.section7;
    this.alarms = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.reportedAlarms = 0;
    this.calculatedAlarms = 0;

    this.sect1Options = [
      {name: "No", value: false},
      {name: "Yes", value: true}
    ];
    this.sect2Options = [
      {name: "No", value: false, alarm: [0, 0]},
      {name: "Yes", value: true, alarm: [0, 1]}
    ];
    this.sect3Options = [
      {name: "No", value: false, alarm: [1, 0]},
      {name: "Yes", value: true, alarm: [1, 3]}
    ];
    this.sect4Options = [
      {name: "Yes", value: true, alarm: [2, 0]},
      {name: "No", value: false, alarm: [2, 4]}
    ];
    this.sect5Options = [
      {name: "Yes", value: true, alarm: [3, 0]},
      {name: "No", value: false, alarm: [3, 4]}
    ];
    this.sect6SexualAssault = [
      {name: "Never", value: "never", alarm: [4, 0]},
      {name: "Rarely/Minor", value: "rarely", alarm: [4, 4]},
      {name: "Frequent/Severe", value: "frequent", alarm: [4, 10]}
    ];
    this.sect6PhysicalAbuse = [
      {name: "Never", value: "never", alarm: [5, 0]},
      {name: "Rarely/Minor", value: "rarely", alarm: [5, 0]},
      {name: "Frequent/Severe", value: "frequent", alarm: [5, 6]}
    ];
    this.sect6EmotionalAbuse = [
      {name: "Never", value: "never", alarm: [6, 0]},
      {name: "Rarely/Minor", value: "rarely", alarm: [6, 0]},
      {name: "Frequent/Severe", value: "frequent", alarm: [6, 2]}
    ];
    this.sect7Options = [
      {name: "Never", value: "never", alarm: [7, 0]},
      {name: "Occasionally", value: "occasionally", alarm: [7, 0]},
      {name: "All the time", value: "allTheTime", alarm: [7, 1]}
    ];
    this.sect8Options = [
      {name: "Never", value: "never", alarm: [8, 0]},
      {name: "Occasionally", value: "occasionally", alarm: [8, 2]},
      {name: "All the time", value: "allTheTime", alarm: [8, 6]}
    ]
    this.sect9Options = [
      {name: "Unable to meet basic needs", value: "unable", alarm: [9, 7]},
      {name: "Able to meet only basic needs, but it is very difficult", value: "onlyBasicNeeds", alarm: [9, 0]},
      {name: "Comfortably meet basic needs, and can afford to buy some non-essential goods/services", value: "someNonEssential", alarm: [9, 0]},
      {name: "Wealthy", value: "wealthy", alarm: [9, 0]}
    ];
    this.sect10Options = [
      {name: "No", value: false, alarm: [10, 0]},
      {name: "Yes", value: true, alarm: [10, 7]}
    ];
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