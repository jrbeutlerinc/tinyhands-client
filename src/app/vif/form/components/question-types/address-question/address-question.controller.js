export default class AddressQuestionController {
    constructor(Address1Service, Address2Service) {
        'ngInject';

        this.address1Service = Address1Service;
        this.address2Service = Address2Service;
    }


    getFuzzyAddress1s(val) {
        return this.address1Service.getFuzzyAddress1s(val)
            .then((promise) => {
                return promise.data;
            });
    }

    getFuzzyAddress2s(val) {
        return this.address2Service.getFuzzyAddress2s(val)
            .then((promise) => {
                return promise.data;
            });
    }

}
                // {
                //     "label": "Victim's Address",
                //     "type": "address",
                //     "answer": {"address1": 333, "address2": 1231}
                // },
