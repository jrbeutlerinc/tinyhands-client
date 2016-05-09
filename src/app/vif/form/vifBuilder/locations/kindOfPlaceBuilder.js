export default class KindOfPlaceBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._personsHouse = false;
        this._busStation = false;
        this._trainStation = false;
        this._shop = false;
        this._factory = false;
        this._brothel = false;
        this._hotel = false;
    }

    setValues(vif) {
        this._personsHouse = vif.location.what_kind_place_persons_house;
        this._busStation = vif.location.what_kind_place_bus_station;
        this._trainStation = vif.location.what_kind_place_train_station;
        this._shop = vif.location.what_kind_place_shop;
        this._factory = vif.location.what_kind_place_factory;
        this._brothel = vif.location.what_kind_place_brothel;
        this._hotel = vif.location.what_kind_place_hotel;
    }

    build(vif = {}) {
        vif.location.what_kind_place_persons_house = this._personsHouse;
        vif.location.what_kind_place_bus_station = this._busStation;
        vif.location.what_kind_place_train_station = this._trainStation;
        vif.location.what_kind_place_shop = this._shop;
        vif.location.what_kind_place_factory = this._factory;
        vif.location.what_kind_place_brothel = this._brothel;
        vif.location.what_kind_place_hotel = this._hotel;
        return vif;
    }

    get personsHouse() {
        return this._personsHouse;
    }

    set personsHouse(value) {
        this.clearAll();
        this._personsHouse = value;
    }

    get busStation() {
        return this._busStation;
    }

    set busStation(value) {
        this.clearAll();
        this._busStation = value;
    }

    get trainStation() {
        return this._trainStation;
    }

    set trainStation(value) {
        this.clearAll();
        this._trainStation = value;
    }

    get shop() {
        return this._shop;
    }

    set shop(value) {
        this.clearAll();
        this._shop = value;
    }

    get factory() {
        return this._factory;
    }

    set factory(value) {
        this.clearAll();
        this._factory = value;
    }

    get brothel() {
        return this._brothel;
    }

    set brothel(value) {
        this.clearAll();
        this._brothel = value;
    }

    get hotel() {
        return this._hotel;
    }

    set hotel(value) {
        this.clearAll();
        this._hotel = value;
    }
}