import irfListTemplate from './list/irfList.html';
import './list/irfList.less';

function IRFRoutes($stateProvider, RequireLogin) {
    'ngInject';
  $stateProvider
    .state('irfList', {
      url: '/irf?search',
      templateUrl: irfListTemplate,
      controller: 'IrfListController',
      controllerAs: 'irfListCtrl',
      resolve: {
        requireLogin: RequireLogin
      }
    })
    .state('irfForm', {
        url: '/irf/test',
        component: 'irfForm'
    });
}

export default IRFRoutes;
