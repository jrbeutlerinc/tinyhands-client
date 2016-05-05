export default class IrfService {
  constructor(BaseService) {
    'ngInject';
    this.service = BaseService;
  }

  getIrf(id) {
    return this.service.get(`api/irf/${id}/`);
  }

  getInterceptees(id) {
    return this.service.get(`api/interceptee/?interception_record=${id}`);
  }
}
