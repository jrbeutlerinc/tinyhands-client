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
  }
}