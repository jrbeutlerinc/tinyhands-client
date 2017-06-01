import uiRouter from 'angular-ui-router';
import sharedModule from '../shared/shared.module';

import idmanagementRouteConfig from './idmanagement.route';

import IdManagementController from './idmanagement.controller';

import IdManagementService from './idmanagement.service';

export default angular.module('tinyhands.IdManagement', [uiRouter, sharedModule])
    .config(idmanagementRouteConfig)

    .controller('IdManagementController', IdManagementController)
    .service('idManagementService', IdManagementService)
    .name;