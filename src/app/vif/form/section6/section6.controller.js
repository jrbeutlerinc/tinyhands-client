export default class VifSection6Controller {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder;
    this.sect1Options = ["Had heard, but never new how bad it was until I was intercepted by TH", "Knew how bad it was, but didn't think that was happening to her",
      "Had never heard about it"];
    this.sect2Options = ["Yes, thankful to TH for saving her", "No, blames Tiny Hands for stopping her", "Doesn't know"];
    this.sect3Options = ["No, I have never heard", "Has heard the name only", "Had heard the gospel but never believed", "Was already a believer"];
    this.sect4Options = ["Doesn't believe in Jesus", "Believes in Jesus, but doesn't plan to go to church", "Believes in Jesus and plans to go to church"];
  }
}