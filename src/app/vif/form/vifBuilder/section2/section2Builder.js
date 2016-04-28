import MigrationPlansBuilder from './migrationPlansBuilder';
import MotiveBuilder from './motiveBuilder';
import DestinationBuilder from './destinationBuilder';

export default class Section2Builder {
    constructor(vif = null) {
       this.migrationPlans = new MigrationPlansBuilder(vif);
       this.motive = new MotiveBuilder(vif);
       this.destination = new DestinationBuilder(vif);
    }

    build(vif) {
        this.migrationPlans.build(vif);
        this.motive.build(vif);
        this.destination.build(vif);
    }

}