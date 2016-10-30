import VIFRoutes from './vif.route';

import VifController from './form/vif.controller';
import VifInfoController from './form/info/info.controller';
import VifPeopleController from './form/people/people.controller';
import VifLocationsController from './form/locations/locations.controller';
import VifListController from './list/vifList.controller';

import VifListService from './list/vifList.service';
import VifService from './form/vif.service';
import Address2Service from '../addresses/address2.service';
import Address1Service from '../addresses/address1.service';



import FormSectionDirective from './form/components/form-section/form-section.directive';
import FormQuestionDirective from './form/components/form-question/form-question.directive';
import TextboxQuestionDirective from './form/components/question-types/textbox-question/textbox-question.directive';
import RadioQuestionDirective from './form/components/question-types/radio-question/radio-question.directive';
import AddressQuestionDirective from './form/components/question-types/address-question/address-question.directive';
import NumberQuestionDirective from './form/components/question-types/number-question/number-question.directive';

export default angular.module('tinyhands.VIF', ['ui.router', 'tinyhands.Shared', 'ui.bootstrap.showErrors'])
    .config(VIFRoutes)

    .controller('VifController', VifController)
    .controller('VifInfoController', VifInfoController)
    .controller('VifPeopleController', VifPeopleController)
    .controller('VifLocationsController', VifLocationsController)
    .controller('VifListController', VifListController)

    .service('VifListService', VifListService)
    .service('VifService', VifService)
    .service('Address1Service', Address1Service)
    .service('Address2Service', Address2Service)

    .directive('formsection', FormSectionDirective)
    .directive('formquestion', FormQuestionDirective)
    .directive('textboxQuestion', TextboxQuestionDirective)
    .directive('radioQuestion', RadioQuestionDirective)
    .directive('addressQuestion', AddressQuestionDirective)
    .directive('numberQuestion', NumberQuestionDirective);
