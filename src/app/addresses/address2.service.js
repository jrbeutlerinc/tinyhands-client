class Address2Service {
    constructor(BaseService) {
        'ngInject';
        this.service = BaseService;
    }

    listAddresses(queryParams) {
        return this.service.get('api/address2/', queryParams);
    }

    searchAddresses(queryParams) {
        return this.listAddresses(queryParams);
    }

    loadMoreAddresses(queryParams) {
        return this.service.get('api/address2/', queryParams);
    }

    saveAddress(address) {
        return this.service.put('api/address2/' + address.id + '/', address);
    }

    getFuzzyAddress2s(val, address1="") {
        var url = 'api/address2/fuzzy/?address2=' + val;
        if (address1 !== "") {
            url += '&' + address1;
        }
        return this.service.get(url);
    }
}

export default Address2Service;
