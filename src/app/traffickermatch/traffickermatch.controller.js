class TraffickerMatchController {
    constructor(StickyHeader, traffickerMatchService, SessionService, $uibModal, SpinnerOverlayService) {
        'ngInject';

        this.sticky = StickyHeader;
        this.traffickerMatchService = traffickerMatchService;
        this.spinnerOverlayService = SpinnerOverlayService;
        this.$uibModal = $uibModal;

        this.type = "name";
        this.searchValue = "";
    }

    showPictureInModal(photoUrl) {
        console.log("Photo URL", photoUrl);
        this.$uibModal.open({
            animation: true,
            template: `<div class="text-center"><img ng-src="${photoUrl}"/></div>`,
            size: 'sm',
        });
    }

    sendMatchAlert(candidate) {
        this.data = {"candidate": candidate};
        console.log("Data:",this.data);
        this.traffickerMatchService.sendMatchAlert(this.data)
            .then(
                (promise) => {
                    this.toastr.success(promise.data.message);
                },
                (error) => {
                    this.toastr.error(error.data.message);
                }
            );
    }

    matchSearch() {
        this.spinnerOverlayService.show("Searching for matches");
        this.type = isNaN(this.searchValue.replace(/[\s-\(\)\.]+/g, "")) ? "name" : "phone";
        this.traffickerMatchService.getKnownPersons(this.searchValue, this.type)
            .then((promise) => {
                this.matchCandidates = promise.data;
                this.spinnerOverlayService.hide();
            });
    }
}

export default TraffickerMatchController;