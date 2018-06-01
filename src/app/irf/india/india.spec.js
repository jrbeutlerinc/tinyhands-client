import {
    IrfIndiaController
}
from "./india.component";

const DateId = 4;
const FamilyId = 82;
const OtherContactId = 92;
const OtherRedFlagId = 31;
const OtherSignId = 134;
const OtherWebsiteId = 244;

describe('IrfIndiaController', () => {
    let vm;
    beforeEach(() => {
        let IndiaService = {
            getIndiaIrf: () => ({
                then: () => {}
            }),
            getLocation: () => ({
                then: () => {}
            }),
            getStaff: () => ({
                then: () => {}
            }),
        };
        vm = new IrfIndiaController(IndiaService);
    });

    describe('function setValuesForOtherInputs', () => {
        beforeEach(() => {
            vm.questions = {
                [DateId]: {
                    question_id: [DateId],
                    response: {
                        value: ''
                    }
                },
                [OtherRedFlagId]: {
                    question_id: OtherRedFlagId,
                    response: {
                        value: false
                    }
                },
                [OtherContactId]: {
                    question_id: OtherContactId,
                    response: {
                        value: false
                    }
                },
                [FamilyId]: {
                    question_id: FamilyId,
                    response: {
                        value: 'Stuff'
                    }
                },
                [OtherWebsiteId]: {
                    question_id: OtherWebsiteId,
                    response: {
                        value: false
                    }
                },
                [OtherSignId]: {
                    question_id: OtherSignId,
                    response: {
                        value: false
                    }
                },
                [OtherWebsiteId]: {
                    question_id: OtherWebsiteId,
                    response: {
                        value: false
                    }
                },
            };
        });

        it('should set other flags', () => {
            vm.setValuesForOtherInputs();

            expect(vm.otherRedFlag).toEqual(false);
            expect(vm.otherWebsite).toEqual(false);
            expect(vm.otherSign).toEqual(false);
        });
    });

    describe('function setOtherQuestionValues', () => {
        beforeEach(() => {
            vm.questions = {

                [OtherRedFlagId]: {
                    question_id: OtherRedFlagId,
                    response: {
                        value: false
                    }
                },
            };
        });

        it('when  response value is false should return false and set response value to empty string', () => {
            let temp = vm.setOtherQuestionValues(OtherRedFlagId);

            expect(temp).toEqual(false);
            expect(vm.questions[OtherRedFlagId].response.value).toEqual('');
        });

        it('when response value is a string, should return true, leave response value as a string', () => {
            vm.questions[OtherRedFlagId].response.value = 'hello there I am a red flag';

            let temp = vm.setOtherQuestionValues(OtherRedFlagId);

            expect(temp).toEqual(true);
            expect(vm.questions[OtherRedFlagId].response.value).toEqual('hello there I am a red flag');
        });

    });

    describe('function setContactRadio', () => {
        beforeEach(() => {
            vm.questions = {
                92: {
                    question_id: OtherContactId,
                    response: {
                        value: ''
                    }
                }
            };
        });

        it('when contactValue matches an item in Contacts leave it as is, leave otherContactString as is', () => {
            vm.questions[OtherContactId].response.value = 'Police';

            vm.setContactRadio();

            expect(vm.contactValue).toEqual('Police');
            expect(vm.otherContactString).toEqual('');
        });

        it('when contactValue is null leave it as it is, leave otherContactString as is', () => {
            vm.setContactRadio();

            expect(vm.otherContactString).toEqual('');
            expect(vm.contactValue).toEqual('');
        });

        it('when contactValue does not match one of Contacts, change contactValue to other and otherContactString to string value', () => {
            vm.questions[OtherContactId].response.value = 'I am another contact';

            vm.setContactRadio();

            expect(vm.otherContactString).toEqual('I am another contact');
            expect(vm.contactValue).toEqual('Other');
        });

    });

    describe('function setFamilyRadio', () => {
        beforeEach(() => {
            vm.questions = {
                [FamilyId]: {
                    question_id: FamilyId,
                    response: {
                        value: 'Stuff'
                    }
                }
            };
        });

        it('when other family is not in family array should set other family string to other family value and family value to \'Other\'', () => {
            vm.setFamilyRadio();

            expect(vm.otherFamilyString).toEqual('Stuff');
            expect(vm.familyValue).toEqual('Other');
        });

        it('when family value is in family array should set the family value to family value', () => {
            vm.questions[FamilyId].response.value = '';

            vm.setFamilyRadio();

            expect(vm.questions[FamilyId].response.value).toEqual('');
        });
        it('when family value is an empty string, leave family string as the same value and family value as the same value', () => {
            vm.questions[FamilyId].response.value = '';

            vm.setFamilyRadio();

            expect(vm.questions[FamilyId].response.value).toEqual('');
        });
    });
});