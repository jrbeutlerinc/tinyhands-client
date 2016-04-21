export default class IrfController {
  constructor($stateParams, IrfService) {
    'ngInject';

    this.service = IrfService;

    this.flags = 0;
    this.form = {};
    this.irfId = $stateParams.id;
    this.numPersonBoxes = 1;
    this.sections = [];
    this.selectedSectionIndex = 0;

    this.addSections();
    this.getIrf();
    this.getInterceptee();
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
    });
  }

  getInterceptee() {
    this.service.getInterceptee(this.irfId).then((response) => {
      this.interceptee = response.data;
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