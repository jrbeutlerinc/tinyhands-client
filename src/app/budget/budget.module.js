import budgetRouteConfig from './budget.route';

import BudgetController from './form/budget.controller';
import BudgetListController from './list/budgetList.controller';

import MathOperator from './mathOperator/mathOperator.directive';

import BudgetListService from './list/budgetList.service';
import BudgetService from './form/budget.service';

export default angular.module('tinyhands.Budget', ['ui.router', 'tinyhands.Shared'])
    .config(budgetRouteConfig)

    .controller('BudgetController', BudgetController)
    .controller('BudgetListController', BudgetListController)

    .directive('operator', MathOperator)

    .filter('capitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        };
    })

    .service('BudgetListService', BudgetListService)
    .service('BudgetService', BudgetService);