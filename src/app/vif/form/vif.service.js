export default class VifService {
    constructor(BaseService) {
        'ngInject';
        this.service = BaseService;
    }

    getMockData() {
        return {
        	"form_type": "vif",
        	"form_number": "BHD100",
        	"number_of_victims": 4,
        	"number_of_traffickers": 4,
        	"location": "",

        	"interviewer": 5,

        	"sections": [{
        			"label": "VICTIM & FAMILY INFORMATION",
        			"questions": [{
        				"label": "Victim's Name",
        				"type": "textbox",
        				"answer": "fooBar"
        			}, {
        				"label": "Victim's Gender",
        				"type": "radio",
        				"options": [{
        					"key": "Male",
        					"value": "0"
        				}, {
        					"key": "Female",
        					"value": "1"
        				}],
        				"answer": "1"
        			}, {
        				"label": "Victim's Address",
        				"type": "address",
        				"answer": {
        					"address1": 333,
        					"address2": 1231
        				}
        			}, {
        				"label": "Victim's Ward #",
        				"type": "integer",
        				"answer": 5
        			}, {
        				"label": "Victim's Phone #",
        				"type": "integer",
        				"answer": 5123123
        			}, {
        				"label": "Victim Age",
        				"type": "integer",
        				"answer": 20
        			}, {
        				"label": "Victim Height (ft)",
        				"type": "float",
        				"answer": 5.5
        			}, {
        				"label": "Victim Weight (kg)",
        				"type": "float",
        				"answer": 155
        			}, {
        				"label": "Caste (filled by interviewer, not asked directly)",
        				"type": "radio",
        				"options": [{
        					"key": "Magar",
        					"value": "Magar"
        				}, {
        					"key": "Jaisi",
        					"value": "Jaisi"
        				}, {
        					"key": "Thakuri",
        					"value": "Thakuri"
        				}, {
        					"key": "Magar",
        					"value": "Magar"
        				}, {
        					"key": "Other",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "What is your occupation?",
        				"type": "radio",
        				"options": [{
        					"key": "Unemployed",
        					"value": "Unemployed"
        				}, {
        					"key": "Farmer",
        					"value": "Farmer"
        				}, {
        					"key": "Wage-Laborer",
        					"value": "Wage-Laborer"
        				}, {
        					"key": "Other",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "Marital Status",
        				"type": "radio",
        				"options": [{
        					"key": "Single",
        					"value": "Unemployed"
        				}, {
        					"key": "Married",
        					"value": "Farmer"
        				}, {
        					"key": "Widow",
        					"value": "Wage-Laborer"
        				}, {
        					"key": "Divorced",
        					"value": "asdfads"
        				}, {
        					"key": "Husband has other wives",
        					"value": "asdfads"
        				}, {
        					"key": "Abandoned by husband",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "With whom do you live?",
        				"type": "radio",
        				"options": [{
        					"key": "Single",
        					"value": "Unemployed"
        				}, {
        					"key": "Married",
        					"value": "Farmer"
        				}, {
        					"key": "Widow",
        					"value": "Wage-Laborer"
        				}, {
        					"key": "Divorced",
        					"value": "asdfads"
        				}, {
        					"key": "Husband has other wives",
        					"value": "asdfads"
        				}, {
        					"key": "Abandoned by husband",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "How many people are in your (own) family?",
        				"type": "integer",
        				"answer": 1
        			}, {
        				"label": "Who is your primary guardian?",
        				"type": "radio",
        				"options": [{
        					"key": "Own Parent(s)",
        					"value": "Unemployed"
        				}, {
        					"key": "Husband",
        					"value": "Farmer"
        				}, {
        					"key": "Other Relative",
        					"value": "Wage-Laborer"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "Guardian's Address",
        				"type": "address",
        				"answer": {
        					"address1": 333,
        					"address2": 1231
        				}
        			}, {
        				"label": "Guardian's Ward #",
        				"type": "integer",
        				"answer": 5
        			}, {
        				"label": "Guardian's Phone #",
        				"type": "integer",
        				"answer": 5123123
        			}, {
        				"label": "What is parents' marital status",
        				"type": "radio",
        				"options": [{
        					"key": "Single",
        					"value": "Unemployed"
        				}, {
        					"key": "Married",
        					"value": "Farmer"
        				}, {
        					"key": "Widow",
        					"value": "Wage-Laborer"
        				}, {
        					"key": "Divorced",
        					"value": "asdfads"
        				}, {
        					"key": "Husband has other wives",
        					"value": "asdfads"
        				}, {
        					"key": "Abandoned by husband",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "Education Level",
        				"type": "radio",
        				"options": [{
        					"key": "None",
        					"value": "Unemployed"
        				}, {
        					"key": "Only informal (adult)",
        					"value": "Farmer"
        				}, {
        					"key": "Primary only",
        					"value": "Wage-Laborer"
        				}, {
        					"key": "Bachelors",
        					"value": "asdfads"
        				}],
        				"answer": "asdfads"
        			}, {
        				"label": "Is the victim literate?",
        				"type": "radio",
        				"options": [{
        					"key": "Yes",
        					"value": 1
        				}, {
        					"key": "No",
        					"value": 2
        				}],
        				"answer": 1
        			}]
        		}, {
        			"label": "MIGRATION PLANS",
        			"questions": [{
        					"label": "What was the main thing which you were going abroad to do?",
        					"type": "radio",
        					"options": [{
        						"key": "Education",
        						"value": "Unemployed"
        					}, {
        						"key": "Travel / Tour",
        						"value": "Farmer"
        					}, {
        						"key": "Shopping",
        						"value": "Wage-Laborer"
        					}, {
        						"key": "Arranged Marriage",
        						"value": "asdfads"
        					}],
        					"answer": "asdfads"
        				}, {
        					"label": "Primary motive to go abroad?",
        					"type": "radio",
        					"options": [{
        						"key": "Education",
        						"value": "Unemployed"
        					}, {
        						"key": "Travel / Tour",
        						"value": "Farmer"
        					}, {
        						"key": "Shopping",
        						"value": "Wage-Laborer"
        					}, {
        						"key": "Arranged Marriage",
        						"value": "asdfads"
        					}],
        					"answer": "asdfads"
        				}

        			]
        		}, {
        			"label": "RECRUITMENT PROCESS",
        			"questions": [

        			]
        		}, {
        			"label": "TRAVEL AND TRANSIT",
        			"questions": [

        			]
        		}, {
        			"label": "DESTINATION & INDIA CONTACT",
        			"questions": [

        			]
        		}, {
        			"label": "VICTIM & FAMILY INFORMATION",
        			"questions": [

        			]
        		}, {
        			"label": "AWARENESS & ASSESSMENT",
        			"questions": [

        			]
        		}, {
        			"label": "HOME SITUATION ASSESSMENT",
        			"questions": [

        			]
        		}, {
        			"label": "INTERVIEWER EVALUATION",
        			"questions": [

        			]
        		}



        	],

        	"questions": [

        		{
        			"label": "Was a manpower involved?",
        			"type": "radio location",
        			"answer": {
        				"value": "",
        				"related_box": "123"
        			}
        		}, {
        			"label": "For how long did you stay?",
        			"type": "timespan",
        			"answer": {
        				"value": "",
        				"related_box": "123"
        			}
        		},

        		{
        			"label": "How was the expense for taking you abroad paid for?",
        			"type": "radio",
        			"options": []
        		}, {
        			"label": "What was the amount paid?",
        			"type": "integer"
        		},

        		{
        			"label": "Did these take place on the way?",
        			"type": "radio",
        			"options": [],
        			"answer": ""
        		}, {
        			"label": "By Whom?",
        			"type": "text",
        			"answer": ""
        		}, {
        			"label": "Explain",
        			"type": "text",
        			"answer": ""
        		}, {
        			"label": "attached scanned form",
        			"type": "file",
        			"answer": ""
        		},


        		{
        			"label": "Did your family/guardian pressure you in any way to?",
        			"type": "radio",
        			"answer": 5,
        			"choices": [{
        				"key": "No",
        				"value": "0",
        				"points": "0"
        			}, {
        				"key": "Yes",
        				"value": "1",
        				"points": "5"
        			}],
        			"group": "WarningFlags"
        		}





        	],

        	"location_boxes": [

        	],
        	"persons": [

        	]

        }
    }
}
