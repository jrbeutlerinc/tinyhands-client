import sharedModule from '../shared/shared.module';

import accountRouteConfig from './account.route';

import ActivateAccountController from './components/activate/activateAccount.controller';
import AccountController from './account.controller';
import AccountListController from './components/list/accountList.controller';
import AccessControlController from './components/control/accessControl.controller';
import AccountEditController from './components/edit/accountEdit.controller';
import UnsavedChangesModalController from './components/modal/unsavedChangesModal.controller';

import AccountService from './account.service';
import UserPermissionsService from './userPermissions.service';

export default angular.module('tinyhands.Account', [sharedModule])
    .config(accountRouteConfig)

    .controller('ActivateAccountController', ActivateAccountController)
    .controller('AccountController', AccountController)
    .controller('AccountListController', AccountListController)
    .controller('AccessControlController', AccessControlController)
    .controller('AccountEditController', AccountEditController)
    .controller('UnsavedChangesModalController', UnsavedChangesModalController)

    .service('AccountService', AccountService)
    .service('UserPermissionsService', UserPermissionsService)
    .name;
