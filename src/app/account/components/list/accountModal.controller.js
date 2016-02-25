export default class AccountModalController {
  constructor($scope, $uibModalInstance, user_name) {
    
    this.user_name = user_name
    this.$uibModalInstance = $uibModalInstance
  }

  delete() {
    this.$uibModalInstance.close(true);
  };

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  };
}