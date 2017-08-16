import uiRouter from 'angular-ui-router';
import sharedModule from '../shared/shared.module';

import IRFRoutes from './irf.route';

import IrfFormComponent from './components/irfForm/irfForm.component';
import QuestionComponent from './components/question/question.component';

import IrfListController from './list/irfList.controller';

import IrfListService from './list/irfList.service';

export default angular.module('tinyhands.IRF', [uiRouter, sharedModule])
    .config(IRFRoutes)
    .component('irfForm', IrfFormComponent)
    .component('question', QuestionComponent)
    .controller('IrfListController', IrfListController)
    .service('IrfListService', IrfListService)
    .name;