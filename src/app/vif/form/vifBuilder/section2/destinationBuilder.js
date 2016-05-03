import IndiaBuilder from './destinations/indiaBuilder';
import GulfBuilder from './destinations/gulfBuilder';

export default class DestinationBuilder {
    constructor(vif = null, indiaBuilder = null, gulfBuilder = null) {
        this.india = indiaBuilder || new IndiaBuilder(vif);
        this.gulfOther = gulfBuilder || new GulfBuilder(vif);
    }

    build(vif = {}) {
        this.india.build(vif);
        this.gulfOther.build(vif);
        return vif;
    }

}