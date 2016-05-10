export default class VifInfoController {
    constructor(VifBuilder, VifInfoService) {
        'ngInject';
        this.vif = VifBuilder.infoSection;
        this.options = [];
        this.disable = false;
        this.invalidStationCode = false;
        this.station_code = "";
        this.service = VifInfoService;
        if (this.vif.interviewer !== "") {

            if (typeof this.vif.interviewer == "undefined")
            {
                this.vif.interviewer = "";
            }
            this.options.push(this.vif.interviewer);
        }
        this.validVIF();
    }

    hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    getStationID(station_code) {
        var self = this;
        this.service.getStationID(station_code).then(function (response) {
            var stationID = response.data;
            if (stationID >= 0) {
                self.retrieveStaff(stationID);
                self.invalidStationCode = false;
            }
            else {
                self.invalidStationCode = true;
                self.options = [];
            }
        });
        self.disable = false;
    }

    retrieveStaff(stationID) {
        var self = this;
        this.service.retrieveStaff(stationID).then(function (promise) {
            var data = promise.data;
            self.options = [];
            $(data.results).each(function (person) {
                self.options.push(data.results[person]['first_name'] + ' ' + data.results[person]['last_name']);
            });
        });
    }

    validVIF() {
        var self = this;
        if (this.hasClass(document.getElementById("VifNumber"), "ng-valid") && this.vif.vifNumber !== "" && typeof this.vif.vifNumber !== "undefined") {
            self.station_code = this.vif.vifNumber.slice(0, 3);
            self.getStationID(this.station_code);
        }
        else {
            self.disable = true;
            self.vif.interviewer = "";
            self.options = [];
        }
    }
}