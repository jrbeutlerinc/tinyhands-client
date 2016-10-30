export default class AddressQuestionController {
    constructor(Address1Service, Address2Service, $scope) {
        'ngInject';

        this.address1Service = Address1Service;
        this.address2Service = Address2Service;

        this.getInitialAddresses();
    }

    getInitialAddresses() {
        if (this.question.answer.address1) {
            this.address1Service.getAddress1(this.question.answer.address1).then((promise) => {
                this.address1 = promise.data;
            });
        }

        if (this.question.answer.address2) {
            this.address2Service.getAddress2(this.question.answer.address2).then((promise) => {
                this.address2 = promise.data;
            });
        }
    }

    onAddress1Change() {
        if(this.address1.id) {
            this.question.answer.address1 = this.address1.id;
        } else {
            this.address2 = "";
            this.question.answer.address1 = null;
            this.question.answer.address2 = null;
        }
    }

    onAddress2Change() {
        console.log(this);
        if(this.address2.id) {
            this.question.answer.address2 = this.address2.id;
        } else {
            this.question.answer.address2 = null;
        }
    }

    getFuzzyAddress1s(val) {
        return this.address1Service.getFuzzyAddress1s(val)
            .then((promise) => {
                return promise.data;
            });
    }

    getFuzzyAddress2s(val) {
        var address1 = "";
        if (this.address1.id) {
            address1 = this.address1.name;
        }
        console.log(address1);
        return this.address2Service.getFuzzyAddress2s(val, address1)
            .then((promise) => {
                return promise.data;
            });
    }

}
