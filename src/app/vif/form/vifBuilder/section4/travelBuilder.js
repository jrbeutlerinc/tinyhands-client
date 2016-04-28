export default class TravelBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._touristBus = false;
        this._motorbike = false;
        this._privateCar = false;
        this._localBus = false;
        this._microbus = false;
        this._plane = false;
        this._other = false;
    }

    setValues(vif) {
        this._touristBus = vif.victim_primary_means_of_travel_tourist_bus;
        this._motorbike = vif.victim_primary_means_of_travel_motorbike;
        this._privateCar = vif.victim_primary_means_of_travel_private_car;
        this._localBus = vif.victim_primary_means_of_travel_local_bus;
        this._microbus = vif.victim_primary_means_of_travel_microbus;
        this._plane = vif.victim_primary_means_of_travel_plane;
        this._other = vif.victim_primary_means_of_travel_other;
    }

    build(vif) {
        vif.victim_primary_means_of_travel_tourist_bus = this._touristBus;
        vif.victim_primary_means_of_travel_motorbike = this._motorbike;
        vif.victim_primary_means_of_travel_private_car = this._privateCar;
        vif.victim_primary_means_of_travel_local_bus = this._localBus;
        vif.victim_primary_means_of_travel_microbus = this._microbus;
        vif.victim_primary_means_of_travel_plane = this._plane;
        vif.victim_primary_means_of_travel_other = this._other;
        vif.victim_primary_means_of_travel_other_value = this._otherText;
    }

    get touristBus() {
        return this._touristBus;
    }

    set touristBus(value) {
        this.clearAll();
        this._touristBus = value;
    }

    get motorbike() {
        return this._motorbike;
    }

    set motorbike(value) {
        this.clearAll();
        this._motorbike = value;
    }

    get privateCar() {
        return this._privateCar;
    }

    set privateCar(value) {
        this.clearAll();
        this._privateCar = value;
    }

    get localBus() {
        return this._localBus;
    }

    set localBus(value) {
        this.clearAll();
        this._localBus = value;
    }

    get microbus() {
        return this._microbus;
    }

    set microbus(value) {
        this.clearAll();
        this._microbus = value;
    }

    get plane() {
        return this._plane;
    }

    set plane(value) {
        this.clearAll();
        this._plane = value;
    }

    get other() {
        return this._other;
    }

    set other(value) {
        this.clearAll();
        this._other = value;
    }

    get otherText() {
        return this._otherText;
    }

    set otherText(value) {
        this._otherText = value;
    }
}