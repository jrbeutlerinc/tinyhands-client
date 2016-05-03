export default class IrfController {
  constructor($stateParams, IrfService) {
    'ngInject';

    this.service = IrfService;

    this.flags = 0;
    this.form = {};
    this.irfId = $stateParams.id;
    this.sections = [];
    this.selectedSectionIndex = 0;
    this.taken_into_custody = {};

    this.addSections();
    this.getIrf();
    this.getInterceptees();
  }

  addSections() {
    this.sections.push('app/irf/form/components/metaData/metaData.html');
    for (var pageNum = 1; pageNum <= 9; pageNum++) {
      this.sections.push(`app/irf/form/components/page${pageNum}/page${pageNum}.html`);
    }
  }

  getIrf() {
    this.service.getIrf(this.irfId).then((response) => {
      this.form = response.data;
      this.form.trafficker_taken_into_custody = "1,3,5";
      angular.forEach(this.form.trafficker_taken_into_custody.split(","), (s) => {
        this.taken_into_custody[s] = true;
      });
    });
  }

  getInterceptees() {
    this.service.getInterceptees(this.irfId).then((response) => {
      this.interceptees = response.data.results;
    });
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
