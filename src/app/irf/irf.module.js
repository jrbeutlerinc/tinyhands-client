import uiRouter from 'angular-ui-router';
import sharedModule from '../shared/shared.module';

import IRFRoutes from './irf.route';

import IrfFormComponent from './components/irfForm/irfForm.component';
import CategoryComponent from './components/category/category.component';
import CheckboxComponent from './components/question/checkbox/checkbox.component';
import PromptComponent from './components/prompt/prompt.component';
import QuestionComponent from './components/question/question.component';
import RadioQuestionComponent from './components/question/radio/radio.component';

import IrfListController from './list/irfList.controller';

import IrfListService from './list/irfList.service';
import IrfService from './irf.service';

export default angular.module('tinyhands.IRF', [uiRouter, sharedModule])
    .config(IRFRoutes)
    .component('irfForm', IrfFormComponent)
    .component('category', CategoryComponent)
    .component('checkbox', CheckboxComponent)
    .component('prompt', PromptComponent)
    .component('question', QuestionComponent)
    .component('radioQuestion', RadioQuestionComponent)
    .controller('IrfListController', IrfListController)
    .service('IrfListService', IrfListService)
    .service('IrfService', IrfService)
    .name;