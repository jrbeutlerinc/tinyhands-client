function accountRouteConfig ($stateProvider) {
    'ngInject';
    $stateProvider
    .state('accounts', {
        url: '/accounts',
        abstract: true,
        controller: 'AccountController',
        controllerAs: 'accountCtrl',
        templateUrl: 'app/account/account.html',
        data: {
            requireLogin: true
        }
    })
    .state('accounts.list', {
        url: '/list',
        controller: 'AccountListController',
        controllerAs: 'accountListCtrl',
        templateUrl: 'app/account/components/list/accountList.html',
        data: {
            requireLogin: true,
            index: 0,
        }
    })
    .state('accounts.control', {
        url: '/control',
        controller: 'AccessControlController',
        controllerAs: 'accessControlCtrl',
        templateUrl: 'app/account/components/control/accessControl.html',
        data: {
            requireLogin: true,
            index: 1,            
        }
    })
    .state('accounts.defaults', {
        url: '/defaults',
        controller: 'AccessDefaultsController',
        controllerAs: 'accessDefaultsCtrl',
        templateUrl: 'app/account/components/defaults/accessDefaults.html',
        data: {
            requireLogin: true,
            index: 2,
        }
    })
    .state('account', {
        url: '/account/{id:[0-9]+|create}',
        controller: 'AccountEditController',
        controllerAs: 'accountEditCtrl',
        templateUrl: 'app/account/components/edit/accountEdit.html',
        data: {
            requireLogin: true
        }
    })

    .state('accountNotFound', {
        url: '/account/notfound',
        templateUrl: 'app/account/components/edit/accountNotFound.html',
        data: {
            requireLogin: true
        }
    })

    .state('account activate', {
        url: '/account/activate/:activation_key',
        templateUrl: 'app/account/components/activate/activateAccount.html',
        controller: 'ActivateAccountController',
        controllerAs: 'activateAcctCtrl',
        data: {
            requireLogin: false
        }
    });
}

export default accountRouteConfig;