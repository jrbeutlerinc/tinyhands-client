import dashboardTemplate from './dashboard.html';
import './dashboard.less';

function dashboardRouteConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: dashboardTemplate,
            controller: 'DashboardController',
            controllerAs: 'dashboard',
        });
}

export default dashboardRouteConfig;