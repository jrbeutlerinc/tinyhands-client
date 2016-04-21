import BaseService from './../../base.service';

export default class IrfService extends BaseService{
  constructor($http) {
    'ngInject';

    super($http);
  }

  getIrf(id) {
    return this.get(`api/irf/${id}/`);
  }

  getInterceptee(id) {
    return this.get(`api/interceptee/${id}/`);
  }
}