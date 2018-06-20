export default class NewIrfModalController {
    constructor($state, $uibModalInstance) {
        'ngInject';
        this.$state = $state;
        this.$uibModalInstance = $uibModalInstance;

        this.countries = ['India', 'Nepal', 'South Africa'];
        this.selectedCountry = "India";
    }

    close() {
        this.$uibModalInstance.close();
    }

    createNewIrf() {
        this.$state.go('irf' + this.selectedCountry.replace(' ', ''));
        this.close();
    }

    dismiss() {
        this.$uibModalInstance.dismiss();
    }
}