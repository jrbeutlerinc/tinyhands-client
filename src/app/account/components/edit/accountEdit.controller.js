class PermDropDown {
	constructor(validOptions, currentOptions, settings, customText, eventListener) {
		this.allOptions = validOptions.slice();
		this.options = this.allOptions.slice();
		this.selectedOptions = currentOptions.slice();
		this.settings = settings;
		this.customText = customText;
		this.settings = settings;
		this.eventListener = eventListener;
	}
	
	removeAllOptions() {
		this.selectedOptions = [];
		this.options = [];
	}
	
	restoreAllOptions() {
		this.options = this.allOptions.slice();
	}
	
	removeGroupOptions(country) {
		for (var idx=this.selectedOptions.length -1; idx >= 0; idx--) {
			if (this.selectedOptions[idx].country === country) {
				this.selectedOptions.splice(idx,1);
			}
		}
		for (idx=this.options.length -1; idx >= 0; idx--) {
			if (this.options[idx].country === country) {
				this.options.splice(idx,1);
			}
		}
	}
	
	restoreGroupOptions(country) {
		for (var idx=0; idx < this.allOptions.length; idx++) {
			if (this.allOptions[idx].country === country) {
				this.options.push(this.allOptions[idx]);
			}
		}
	}
}

class PermDropDownGroup {
	constructor(permissionId, permissionName, allCountries, allStations, currentPermissions, accountId) {
		this.permissionId = permissionId;
		this.permissionName = permissionName;
		this.accountId = accountId;
		
		var idx = 0;
		var idx1 = 0;
		
		this.stationValidOptions = [];
		for (idx=0; idx < allStations.length; idx++) {
			for (idx1=0; idx1 < allCountries.length; idx1++) {
				if (allStations[idx].operating_country === allCountries[idx1].id) {
					this.stationValidOptions.push({
						id: allStations[idx].id,
						label: allStations[idx].station_name,
						country: allCountries[idx1].name,});
					break;
				}
			}
		}
        this.stationSettings = {smartButtonMaxItems:1, showCheckAll: false, groupByTextProvider: function(groupValue) { return groupValue; }, groupBy: 'country', scrollableHeight: '250px', scrollable: true, };
        this.stationCustomTexts = {buttonDefaultText: 'None'};
        this.stationEventListeners = {};
        
        var selectedOptions = [];
        for (idx=0; idx < currentPermissions.length; idx++) {
        		if (currentPermissions[idx].station !== null) {
        			for (idx1=0; idx1 < this.stationValidOptions.length; idx1++) {
        				if (currentPermissions[idx].station === this.stationValidOptions[idx1].id) {
        					selectedOptions.push(this.stationValidOptions[idx1]);
        					break;
        				}
        			}
        		}
        }
        
        this.stationDropDown = new PermDropDown(this.stationValidOptions, selectedOptions, this.stationSettings, this.stationCustomTexts, this.stationEventListeners);
        
        this.countryValidOptions = [];
        for (idx=0; idx < allCountries.length; idx++) {
        		this.countryValidOptions.push({id: allCountries[idx].id, label: allCountries[idx].name,});
        }
        this.countrySettings = {smartButtonMaxItems:1, showCheckAll: false,};
        this.countryCustomTexts = {buttonDefaultText: 'None'};
        this.countryEventListeners = {
        		onItemSelect: this.countrySelect,
        		onItemDeselect: this.countryDeselect,
        		onSelectAll: this.countrySelectAll,
        		onDeselectAll: this.countryDeselectAll,
        		stationDropDown: this.stationDropDown,
        };
        
        selectedOptions = [];
        for (idx=0; idx < currentPermissions.length; idx++) {
        		if (currentPermissions[idx].station === null && currentPermissions[idx].country !== null) {
        			for (idx1=0; idx1 < this.countryValidOptions.length; idx1++) {
        				if (currentPermissions[idx].country === this.countryValidOptions[idx1].id) {
        					selectedOptions.push(this.countryValidOptions[idx1]);
        					this.stationDropDown.removeGroupOptions(this.countryValidOptions[idx1].label);
        					break;
        				}
        			}
        		}
        }
        
        this.countryDropDown = new PermDropDown(this.countryValidOptions, selectedOptions, this.countrySettings, this.countryCustomTexts, this.countryEventListeners);
        
		this.globalValidOptions = [ {id: 1, label: "Global"}];
        this.globalSettings = {smartButtonMaxItems:1, selectionLimit: 1, showCheckAll: false, showUncheckAll: false};
        this.globalCustomTexts = {buttonDefaultText: 'None'};
        this.globalEventListeners = {
        		onItemSelect: this.globalSelect,
        		onItemDeselect: this.globalDeselect,
        		onSelectAll: this.globalSelect,
        		onDeselectAll: this.globalDeselect,
        		countryDropDown: this.countryDropDown,
        		stationDropDown: this.stationDropDown,
        };
        
        selectedOptions = [];
        for (idx=0; idx < currentPermissions.length; idx++) {
        		if (currentPermissions[idx].country === null && currentPermissions[idx].station === null) {
        			selectedOptions.push(this.globalValidOptions[0]);
        			this.countryDropDown.removeAllOptions();
        			this.stationDropDown.removeAllOptions();
        			break;
        		}
        }
        
        this.globalDropDown = new PermDropDown(this.globalValidOptions, selectedOptions, this.globalSettings, this.globalCustomTexts, this.globalEventListeners);
	}
	
	globalSelect() {
		this.countryDropDown.removeAllOptions();
		this.stationDropDown.removeAllOptions();
	}
	
	globalDeselect() {
		this.countryDropDown.restoreAllOptions();
		this.stationDropDown.restoreAllOptions();
	}
	
	countrySelect(property) {
		this.stationDropDown.removeGroupOptions(property.label);
	}
	countryDeselect(property) {
		this.stationDropDown.restoreGroupOptions(property.label);
	}
	countrySelectAll() {
		this.stationDropDown.removeAllOptions();
	}
	countryDeselectAll() {
		this.stationDropDown.restoreAllOptions();
	}
	
	getSelectedPermissions() {
		selectedPermissions = [];
		var idx=0;
		if (this.globalDropDown.selectedOptions.length > 0) {
			selectedPermissions.push({
					account: this.accountId, 
					country: null, 
					station: null, 
					permission: this.permissionId});
		}
		
		for (idx=0; idx < this.countryDropDown.selectedOptions.length; idx++) {
			selectedPermissions.push({
					account: this.accountId, 
					country: this.countryDropDown.selectedOptions[idx].id, 
					station: null, 
					permission: this.permissionId});
		}
		
		for (idx=0; idx < this.stationDropDown.selectedOptions.length; idx++) {
			selectedPermissions.push({
					account: this.accountId, 
					country: null, 
					station: this.stationDropDown.selectedOptions[idx].id, 
					permission: this.permissionId});
		}
		return selectedPermissions;
	}
}

export default class AccountEditController {
    constructor($state, $stateParams, AccountService, PermissionsSetsService, toastr) {
        'ngInject';
        this.$state = $state;
        this.AccountService = AccountService;
        this.PermissionsSetsService = PermissionsSetsService;
        this.toastr = toastr;
        this.account = null;
        this.resetErrors();
        if ($stateParams.id !== 'create') {
            this.isEditingAccount = true;
            this.retrieveAccount($stateParams.id);
        } else {
            this.isEditingAccount = false;
            this.account = {};
        }
        this.permissions = [];

        this.saveButtonClicked = false;

        this.getPermissions();

        this.settings = {enableSearch: true};
        
        // Begin test code for PermDropDownGroup
        var permissionsFromServer = [
        		{id:1, permission_group: "IRF", action : 'VIEW'},
        		{id:2, permission_group: "IRF", action : 'ADD'},
        		{id:3, permission_group: "IRF", action : 'EDIT'},
        		{id:4, permission_group: "IRF", action : 'DELETE'},
        		{id:5, permission_group: "IRF", action : 'APPROVE'},
        		{id:6, permission_group: "VIF", action : 'VIEW'},
        		{id:7, permission_group: "VIF", action : 'ADD'},
        		{id:8, permission_group: "VIF", action : 'EDIT'},
        		{id:9, permission_group: "VIF", action : 'DELETE'},
        ];
        var countriesFromServer = [
        		{id: 1, name: "Nepal"}, 
        		{id: 2, name: "South Africa"}, 
        		{id: 3, name: "Thailand"}
        	];
        var stationsFromServer = [
			{id: 1, station_name: "Bhadrapur", operating_country: 1}, 
	    		{id: 3, station_name: "Bhairahwa", operating_country: 1}, 
	    		{id: 6, station_name: "Biratnagar", operating_country: 1},
	    		{id: 7, station_name: "Birgunj", operating_country: 1},
	    		{id: 8, station_name: "Chandrauta", operating_country: 1},
	    		{id: 9, station_name: "Dang", operating_country: 1},
	    		{id: 10, station_name: "Galchhi", operating_country: 1},
	    		{id: 11, station_name: "Gaur", operating_country: 1},
	    		{id: 12, station_name: "Gauriganj", operating_country: 1},
	    		{id: 13, station_name: "Guleria", operating_country: 1},
	    		{id: 14, station_name: "Hetauda", operating_country: 1},
	    		{id: 15, station_name: "Inaruwa", operating_country: 1},
	    		{id: 16, station_name: "Janakpur", operating_country: 1},
	    		{id: 17, station_name: "Jogbani", operating_country: 1},
	    		{id: 18, station_name: "Kakarvitta", operating_country: 1},
	    		{id: 19, station_name: "Kathmandu", operating_country: 1},
	    		{id: 20, station_name: "Lahan", operating_country: 1},
	    		{id: 21, station_name: "Mahendranagar", operating_country: 1},
	    		{id: 22, station_name: "Malangwa", operating_country: 1},
	    		{id: 23, station_name: "Narayanghat", operating_country: 1},
	    		{id: 24, station_name: "Nawalparasi", operating_country: 1},
	    		{id: 25, station_name: "Nepalgunj", operating_country: 1},
	    		{id: 26, station_name: "Pashupatinagar", operating_country: 1},
	    		{id: 27, station_name: "Rajbiraj", operating_country: 1},
	    		{id: 28, station_name: "Tatopani", operating_country: 1},
	    		{id: 5, station_name: "Tikapur", operating_country: 1},
	    		{id: 4, station_name: "Johannesburg", operating_country: 2}, 
	    		{id: 2, station_name: "Bangkok", operating_country: 3},
		];
        
        var initialUserPermissions = [
    			{account: 10022,  country: null, station: null, permission: 1},
    			{account: 10022,  country: null, station: 10, permission: 2},
    			{account: 10022,  country: null, station: 11, permission: 2},
    			{account: 10022,  country: 1, station: null, permission: 3},
    			{account: 10022,  country: null, station: null, permission: 6},
    			];
        
        this.permd = [];
        var permission_group = "IRF";	// permission group to display/edit
        for (var idx=0; idx < permissionsFromServer.length; idx++) {
        		if (permissionsFromServer[idx].permission_group === permission_group) {
        			var user_perm = [];
        			for (var idx1=0; idx1 < initialUserPermissions.length; idx1++) {
        				if (initialUserPermissions[idx1].permission === permissionsFromServer[idx].id) {
        					user_perm.push(initialUserPermissions[idx1]);
        				}
        			}
        			var p = new PermDropDownGroup(permissionsFromServer[idx].id,
        					permissionsFromServer[idx].action,
        					countriesFromServer,
        					stationsFromServer,
        					user_perm,
        					10022);
        			this.permd.push(p);
        			
        		}
        }
    }

    get title() {
        if (this.isEditingAccount && this.account) {
            return `Edit ${this.account.first_name} ${this.account.last_name}'s Account`;
        } else if (this.isEditingAccount) {
            return '';
        } else {
            return 'Create Account';
        }
    }

    get saveButtonText() {
        if (this.isEditingAccount && this.saveButtonClicked) {
            return 'Updating';
        } else if (this.isEditingAccount) {
            return 'Update';
        } else if (this.saveButtonClicked) {
            return 'Creating';
        } else {
            return 'Create';
        }
    }

    get saveButtonStyle() {
        if (this.saveButtonClicked) {
            return 'btn-success';
        } else {
            return 'btn-primary';
        }
    }
	
    getPermissions() {
        this.PermissionsSetsService.getPermissions().then((result) => {
            this.permissions = result.data.results;
        });
    }

    retrieveAccount(id) {
        this.AccountService.getAccount(id).then((result) => {
            this.account = result.data;
        }, (error) => {
            if (error.status === 404) {
                this.$state.go('accountNotFound');
            }
        });
    }

    onUserDesignationChanged(permissionSetId) {
        if (permissionSetId) {
            this.PermissionsSetsService.getPermission(permissionSetId).then((permissions) => {
                this.applyDesignationToAccount(this.account, permissions.data);
            });
        }
    }

    applyDesignationToAccount(account, designation) {
        var designationKeys = Object.keys(designation);
        designationKeys.forEach((attribute) => {
            if (attribute.substring(0, 10) === "permission") {
                account[attribute] = designation[attribute];
            }
        });
    }

    updateOrCreate() {
        if (!this.checkRequiredFieldsHaveValue()) {
            return;
        }
        this.saveButtonClicked = true;
        var call;
        if (this.isEditingAccount) {
            call = this.AccountService.update(this.account.id, this.account);
        } else {
            call = this.AccountService.create(this.account);
        }
        call.then(() => {
            if (this.isEditingAccount) {
                this.toastr.success("Account Updated");
            } else {
                this.toastr.success("Account Created");
            }
            this.saveButtonClicked = false;
            this.$state.go('accounts.list');
        }, (err) => {
            this.saveButtonClicked = false;
            if (err.data.email) {
                this.emailError = err.data.email[0];
            }
        });
    }

    checkRequiredFieldsHaveValue() {
        this.resetErrors();
        let areRequiredFieldsFilledIn = true;
        if (!this.account.email) {
            this.emailError = 'An email is required.';
            areRequiredFieldsFilledIn = false;
        }
        if (!this.account.user_designation) {
            this.userDesignationError = 'A user designation is required.';
            areRequiredFieldsFilledIn = false;
        }
        return areRequiredFieldsFilledIn;
    }

    resetErrors() {
        this.emailError = '';
        this.userDesignationError = '';
    }
}