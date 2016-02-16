import BaseService from '../../base.service';

export default class BudgetListService extends BaseService {
  constructor($http) {
    'ngInject';
    super($http);
  }

  getBudgetList() {
    return this.get('/api/budget/');
  }
}