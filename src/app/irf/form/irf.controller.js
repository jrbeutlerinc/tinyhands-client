export default class IrfController {
    constructor($rootScope, $stateParams, UtilService, IrfService) {
        'ngInject';

        this.root = $rootScope;
        this.service = IrfService;
        this.$stateParams = $stateParams;
        this.utils = UtilService;

        this.errorList = [];
        this.errors = {};
        this.form = {};
        this.irfId = $stateParams.id;
        this.isCreating = !this.irfId;
        this.isViewing = $stateParams.isViewing === "true";
        this.numPersonBoxes = 1;
        this.sections = [];
        this.selectedSectionIndex = 0;
        this.selectedFlags = [];

        this.addSections();
        this.getIrf();
    }

    addSections() {
        this.sections.push('app/irf/form/components/metaData/metaData.html');
        for (var pageNum = 1; pageNum <= 9; pageNum++) {
            this.sections.push(`app/irf/form/components/page${pageNum}/page${pageNum}.html`);
        }
    }

    createIrf() {
        this.form.date_form_received = new Date();
        this.service.createIrf().then((response) => {

        }, (response) => {
            this.errors = response.data;
            this.errorList = this.utils.handleErrors(response.data);
        });
    }

    createOrUpdateIrf() {
        if (this.isCreating) {
            this.createIrf();
        } else {
            
        }
    }

    getIrf() {
        if (this.irfId) {
            this.service.getIrf(this.irfId).then((response) => {
                this.form = response.data;
                this.form.date_time_of_interception = new Date(this.form.date_time_of_interception);
            });
        }
    }

    getFlagText() {
        if (this.root.flags) {
            if (this.root.flags < 50) {
                return this.root.flags;
            } else {
                return '50 or More Flags';
            }
        }
        return '';
    }

    nextSection() {
        if (this.selectedSectionIndex < (this.sections.length - 1)) {
            this.selectedSectionIndex += 1;
        }
    }

    previousSection() {
        if (this.selectedSectionIndex > 0) {
            this.selectedSectionIndex -= 1;
        }
    }
}