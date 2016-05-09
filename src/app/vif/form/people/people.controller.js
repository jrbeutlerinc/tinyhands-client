export default class VifPeopleController {
  constructor(VifBuilder) {
    'ngInject';
    this.vif = VifBuilder.people;
    this.sect1aList = [
      {name: "Boss of...", value: ""},
      {name: "Co-worker of...", value: ""},
      {name: "Own relative of...", value: ""}
    ];
    this.sect1bList = [
      {name: "Broker", value: ""},
      {name: "Companion", value: ""}
    ];
    this.sect1cList = [
      {name: "India Trafficker", value: ""},
      {name: "Contact of Husband", value: ""},
      {name: "Known Trafficker", value: ""},
      {name: "Manpower", value: ""},
      {name: "Passport", value: ""},
      {name: "Sex Industry", value: ""}
    ];
    this.sect3List = [
      {name: "Kirat", value: ""},
      {name: "Sherpa", value: ""},
      {name: "Madeshi", value: ""},
      {name: "Pahadi", value: ""},
      {name: "Newari", value: ""}
    ];
    this.occupations = [
      {name: "None", value: ""},
      {name: "Agent (taking girls to India)", value: ""},
      {name: "Business owner", value: ""},
      {name: "Wage labor", value: ""},
      {name: "Job in India", value: ""},
      {name: "Job in Gulf", value: ""},
      {name: "Farmer", value: ""},
      {name: "Teacher", value: ""},
      {name: "Police", value: ""},
      {name: "Army", value: ""},
      {name: "Guard", value: ""},
      {name: "Cook", value: ""},
      {name: "Driver", value: ""}
    ];
    this.party = [
      {name: "Congress", value: ""},
      {name: "Maoist", value: ""},
      {name: "UML", value: ""},
      {name: "Forum", value: ""},
      {name: "Tarai Madesh", value: ""},
      {name: "Shadbawona", value: ""},
      {name: "Raprapha Nepal Thruhat", value: ""},
      {name: "Nepal Janadikarik Forum", value: ""},
      {name: "Loktantrak Party", value: ""},
      {name: "Don't Know", value: ""}
    ];
  }
}