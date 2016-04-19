import IndiaBuilder from './destinations/indiaBuilder';
import GulfBuilder from './destinations/gulfBuilder';

export default class DestinationBuilder {
    constructor(vif = null) {
        this.india = new IndiaBuilder(vif);
        this.gulfOther = new GulfBuilder(vif);
    }

    build(vif) {
        this.india.build(vif);
        this.gulfOther.build(vif);
    }

}