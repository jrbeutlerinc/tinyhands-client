export default class VifService {
    constructor(BaseService) {
        'ngInject';
        this.service  = BaseService;
    }
    
    get(id) {
        return this.service.get(`api/vif/${id}/`);
    }
    
    create(vif) {
        return this.service.post('api/vif/', vif);
    }
    
    update(id, vif) {
        return this.service.post(`api/vif/${id}/`, vif);
    }
    
    delete(id) {
        return this.service.delete(`api/vif/${id}/`);
    }    
}
