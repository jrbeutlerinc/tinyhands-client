export default class VifLocationsController {
  constructor(VifBuilder) {
      'ngInject';
      this.counter = 1;
      this.selectedTab = 0;
      this.vif = VifBuilder;
      this.tabs = [{ id:1, content:'This is a default tab on load', deletable: false }];

      this.deleteTab = function()
      {
          this.tabs.pop();
      }

      /** Function to add a new tab **/
      this.addTab = function() {
          this.counter++;
          this.tabs.push({id:this.counter,content:'Any Content', deletable:true});
          this.selectedTab = this.tabs.length - 1; //set the newly added tab active.
      }
      /** Function to delete a tab **/
      this.deleteTab = function(index) {
          if (index != 0)
              this.tabs.splice(index, 1); //remove the object from the array based on index
      }
      /** Function to select a tab **/
      this.selectTab = function(index) {
          this.selectedTab = index;
      }
  }
}