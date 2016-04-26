export default class VifInfoController {
  constructor(VifBuilder) {
    'ngInject'
    this.vif = VifBuilder;
    console.log(this.vif);
  }
}