export default class VifInfoService {
    constructor(BaseService) {
        'ngInject';
        this.service = BaseService;
    }

    retrieveStaff(StationID) {
        return this.service.get(`api/staff/?border_station=${StationID}`);
    }

    getStationID(borderStationCode) {
        return this.service.get('get_station_id/', [{ name: "code", value: borderStationCode}]);
    }
}