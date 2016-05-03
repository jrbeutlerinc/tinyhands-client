export default class VifSection6Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder.section6;
    this.sect1Options = [
      {name: "Had heard, but never new how bad it was until I was intercepted by TH", value: "hadHeard"},
      {name: "Knew how bad it was, but didn't think that was happening to her", value: "knewHowBad"},
      {name: "Had never heard about it", value: "neverHeard"}
    ];

    this.sect2Options = [
      {name: "Yes, thankful to TH for saving her", value: "yes"},
      {name: "No, blames Tiny Hands for stopping her", value: "no"},
      {name: "Doesn't know", value: "doesntKnow"}
    ];
    this.sect3Options = [
      {name: "No, I have never heard", value: "neverHeard"},
      {name: "Has heard the name only", value: "nameOnly"},
      {name: "Had heard the gospel but never believed", value: "neverBelieved"},
      {name: "Was already a believer", value: "alreadyBeliever"},
    ];
    this.sect4Options = [
      {name: "Doesn't believe in Jesus", value: "doesntBelieve"},
      {name: "Believes in Jesus, but doesn't plan to go to church", value: "believesButNoChurch"},
      {name: "Believes in Jesus and plans to go to church", value: "believesAndChurch"}
    ];

    this.getVif = function(){
      console.log(this.vif);
    }
  }
}