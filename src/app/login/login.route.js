import loginTemplate from './login.html';
import passwordResetTemplate from './password-reset/password-reset.html';

function loginRouteConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('login', {
            url: '/login?returnState?params',
            templateUrl: loginTemplate,
            controller: 'LoginController',
            controllerAs: 'login',
            data: {
                loginNotRequired: true
            }
        })
        .state('password-reset', {
            url: '/password-reset',
            templateUrl: passwordResetTemplate,
            controller: 'PasswordResetController',
            controllerAs: 'pwReset',
            data: {
                loginNotRequired: true
            }
        });
}

export default loginRouteConfig;