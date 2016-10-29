export default class VIFController {
    constructor($state, VifService) {
        'ngInject';
        this.$state = $state;
        this.service = VifService;

        this.initialize();
    }

    initialize() {
        this.sections = this.service.getMockData().sections;
        this.sectionIndex = 0;
    }

    goToSection(index) {
        if(this.validIndex(index)) {
            this.sectionIndex = index;
        }
    }

    validIndex(index) {
        return (index >= 0 && index < this.sections.length);
    }

    nextSection() {
        this.goToSection(this.sectionIndex + 1);
    }

    prevSection() {
        this.goToSection(this.sectionIndex - 1);
    }
}
