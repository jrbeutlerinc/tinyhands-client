import InfoSectionBuilder from './infoSectionBuilder';
import Section1Builder from './section1/section1Builder';
import Section2Builder from './section2/section2Builder';
import Section3Builder from './section3/section3Builder';
import Section4Builder from './section4/section4Builder';
import Section5Builder from './section5/section5Builder';
import Section6Builder from './section6/section6Builder';
import Section7Builder from './section7/section7Builder';
import Section8Builder from './section8/section8Builder';
import PeopleBuilder from './people/peopleBuilder';

export default class VifBuilder {
    constructor() {
        this.clearVif();
    }
    
    build() {
        vif = {};
        this.infoSection.build(vif);
        this.section1.build(vif);
        this.section2.build(vif);
        this.section3.build(vif);
        this.section4.build(vif);
        this.section5.build(vif);
        this.section6.build(vif);
        this.section7.build(vif);
        this.section8.build(vif);
        this.people.build(vif);
        return vif;
    }
    
    setVif(vif) {
        this.infoSection = new InfoSectionBuilder(vif);
        this.section1 = new Section1Builder(vif);
        this.section2 = new Section2Builder(vif);
        this.section3 = new Section3Builder(vif);
        this.section4 = new Section4Builder(vif);
        this.section5 = new Section5Builder(vif);
        this.section6 = new Section6Builder(vif);
        this.section7 = new Section7Builder(vif);
        this.section8 = new Section8Builder(vif);
        this.people = new PeopleBuilder(vif);
    }
    
    clearVif() {
       this.setVif(null);
    }
}