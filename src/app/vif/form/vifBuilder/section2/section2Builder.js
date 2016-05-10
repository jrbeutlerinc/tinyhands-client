import MigrationPlansBuilder from './migrationPlansBuilder';
import MotiveBuilder from './motiveBuilder';
import DestinationBuilder from './destinationBuilder';

export default class Section2Builder {
    constructor(vif = null, migrationPlansBuilder = null, motiveBuilder = null, destinationBuilder = null) {
       this.migrationPlans = migrationPlansBuilder || new MigrationPlansBuilder(vif);
       this.motive = motiveBuilder || new MotiveBuilder(vif);
       this.destination = destinationBuilder || new DestinationBuilder(vif);
    }

    build(vif = {}) {
        this.migrationPlans.build(vif);
        this.motive.build(vif);
        this.destination.build(vif);
        return vif;
    }

}