import VIFRoutes from './vif.route';

import VifController from './form/vif.controller';
import VifInfoController from './form/info/info.controller';
import VifPeopleController from './form/people/people.controller';
import VifLocationsController from './form/locations/locations.controller';
import VifListController from './list/vifList.controller';

import VifListService from './list/vifList.service';
import VifService from './form/vif.service';

import FormSectionDirective from './form/components/form-section/form-section.directive';
import FormQuestionDirective from './form/components/form-question/form-question.directive';

export default angular.module('tinyhands.VIF', ['ui.router', 'tinyhands.Shared'])
    .config(VIFRoutes)

    .controller('VifController', VifController)
    .controller('VifInfoController', VifInfoController)
    .controller('VifPeopleController', VifPeopleController)
    .controller('VifLocationsController', VifLocationsController)
    .controller('VifListController', VifListController)

    .service('VifListService', VifListService)
    .service('VifService', VifService)

    .directive('formsection', FormSectionDirective)
    .directive('formquestion', FormQuestionDirective);
