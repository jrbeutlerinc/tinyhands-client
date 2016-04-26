export default class VifLocationsController {
  constructor(VifBuilder) {
      'ngInject'
      this.vif = VifBuilder;
      this.tabs = [
          { title:'Dynamic Title 1', content:'Dynamic content 1' },
          { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
      ];
      this.deleteTab = function()
      {
          this.tabs.pop();
      }
      this.addTab = function()
      {
          this.tabs.push({ title:'Dynamic Title 1', content:'Dynamic content 1' });
      }
  }
}