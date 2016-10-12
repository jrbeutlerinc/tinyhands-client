import PasswordResetController from './password-reset.controller';
import BaseService from './../../base.service';

describe('PasswordResetController', () => {

  let vm;

  beforeEach(() => {
    let $http = null;
    let service = new BaseService($http);


    vm = new PasswordResetController(service, () => {});
  });

  describe('function constructor', () => {

    it('email should be empty string', () => {
      expect(vm.email).toEqual('');
    });

  });

  describe('function resetPassword', () => {
    it('should call resetPassword with email and success', () => {
      spyOn(vm, 'resetPassword');

      vm.resetPassword();

      expect(vm.resetPassword).toHaveBeenCalled();
    });
  });
});
