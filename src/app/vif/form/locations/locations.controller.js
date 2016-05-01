export default class VifLocationsController {
  constructor(VifBuilder) {
      'ngInject';
      this.counter = 1;
      this.selectedTab = 0;
      this.tabs = [{ id:1, content:'', deletable: false }];
      this.vif = VifBuilder;

      /** Function to add a new tab **/
      this.addTab = function() {
          this.counter++;
          this.tabs.push({id:this.counter,content:'', deletable:true});
          this.selectedTab = this.tabs.length - 1; //set the newly added tab active.
      };

      /** Function to delete a tab **/
      this.deleteTab = function(index) {
          if (index !== 0) {
              this.tabs.splice(index, 1); //remove the object from the array based on index
              if (this.selectedTab === index || this.selectedTab > index) {
                  this.selectedTab = this.selectedTab - 1;
                  if (this.selectedTab < 0) {
                      this.selectedTab = 0;
                  }
              }
          }
      };

      /** Function to select a tab **/
      this.selectTab = function(index) {
          this.selectedTab = index;
      };
  }
}