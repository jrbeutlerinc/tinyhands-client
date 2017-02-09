export default class SessionService {
    constructor($rootScope, $state, $timeout, $q, BaseService) {
        'ngInject';

        this.service = BaseService;
        this.root = $rootScope;
        this.routeState = $state;
        this.timeout = $timeout;
        this.$q = $q;

        this.user = {};
    }

    attemptLogin(username, password) {
        return this.service.post('api/login/', { "username": username, "password": password })
            .then((promise) => {
                localStorage.token = "Token " + promise.data.token;
                this.root.authenticated = true;
                return true;
            }, (reason) => {
                let error;
                if (reason.status === 400) {
                    error = "Invalid Login";
                } else {
                    error = "Unable to connect to server";
                }
                this.clearSession();
                return this.$q.reject(error);
            });
    }

    me() {
        return this.service.get('api/me/').then((result) => {
            this.user = result.data;
            this.root.$broadcast('GetNavBarBorderStations');
            return this.user;
        });
    }
    // See if page loading needs to have user logged in
    // See if there is already a user logged in
    checkAuthenticity() {
        this.createStateChangeListener();
    }

    checkAuthenticityLogic(requireLogin, token) {
        if (requireLogin && typeof token === 'undefined') { // if not logged in and page requires login
            this.timeout(() => { // State isn't quite ready on load so we need this timeout
                this.routeState.go('login'); // Make user login
            });
        } else if (token) {
            this.root.authenticated = true;
            this.me();
        }
    }

    checkPermissions(stateData, toState) {
        if (angular.isDefined(stateData.permissions_required)) {
            this.service.get('api/me/').then((result) => {
                for (var x = 0; x < stateData.permissions_required.length; x++) {
                    if (!result.data[stateData.permissions_required[x]]) {
                        this.routeState.go('dashboard');
                        window.toastr.error(`You are not authorized to view the ${toState.name} page!`);
                    }
                }
            });
        }
    }

    checkIfAuthenticated() {
        let defer = this.$q.defer();
        if (typeof localStorage.token === 'undefined') {
            defer.reject('Not Authenticated');
            return defer.promise;
        } else {
            this.root.authenticated = true;
            return this.me();
        }
    }

    createStateChangeListener() {
        this.root.$on('$stateChangeStart', (event, toState) => {
            var requireLogin = toState.data.requireLogin; // See if page requires login
            var token = localStorage.token; // Get user token from storage if already logged in

            this.checkAuthenticityLogic(requireLogin, token);
            this.checkPermissions(toState.data, toState);
        });
    }

    logout() {
        this.clearSession();
        this.routeState.go('login');
    }

    clearSession() {
        localStorage.removeItem('token');
        this.user = {};
        this.root.authenticated = false; // Set authenticated to false
    }
}
