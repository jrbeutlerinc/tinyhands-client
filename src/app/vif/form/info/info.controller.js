export default class VifInfoController {
  constructor(VifBuilder) {
      'ngInject';
      this.vif = VifBuilder.infoSection;
      this.options = [
          {name: 'AngularJS'},
          {name: 'Bootstrap'},
          {name: 'Foundation'},
          {name: 'Polymer'}
      ];
      this.vifNumber = "";
      //this.station_code = document.getElementById("id_vif_number").value.slice(0,3);
  }
}