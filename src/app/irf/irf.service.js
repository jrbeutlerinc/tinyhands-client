export default class IrfService {
    constructor(BaseService, $q) {
        'ngInject';
        this.service = BaseService;
        this.$q = $q;
    }

    getForm() {
        return this.$q.resolve({
            "form_id": "BHD123",
            "form_type": "IRF",
            "Storage": "InterceptionRecord",
            "Language": "English",
            "categories": [{
                "category_id": 1,
                "type": "grid",
                "name": "Who is in the group?",
                "order": 1,

                "questions": [
                    {
                        "question_id": 2,
                        "display_text": "Alone",
                        "answer_type": "checkbox",
                        "layout": "1.1"
                    },
                    {
                        "question_id": 3,
                        "display_text": "Is meeting someone just across the border",
                        "answer_type": "checkbox",
                        "layout": "1.1.1.1"
                    },
                    {
                        "question_id": 4,
                        "display_text": "Meeting someone she's seen in Nepal in the last month",
                        "answer_type": "checkbox",
                        "layout": "1.1.1.2"
                    },
                    {
                        "question_id": 5,
                        "display_text": "Was travelling with someone not with her",
                        "answer_type": "checkbox",
                        "layout": "1.1.2.1"
                    },
                    {
                        "question_id": 6,
                        "display_text": "Husband / Wife",
                        "answer_type": "checkbox",
                        "layout": "1.2"
                    },
                    {
                        "question_id": 7,
                        "display_text": "Married in the past 2 weeks",
                        "answer_type": "checkbox",
                        "layout": "1.2.1.1"
                    },
                    {
                        "question_id": 8,
                        "display_text": "Married within the past 2-8 weeks",
                        "answer_type": "checkbox",
                        "layout": "1.2.1.2"
                    },
                    {
                        "question_id": 9,
                        "display_text": "Less than 2 weeks before eloping",
                        "answer_type": "checkbox",
                        "layout": "1.2.2.1"
                    },
                    {
                        "question_id": 10,
                        "display_text": "2-12 weeks before eloping",
                        "answer_type": "checkbox",
                        "layout": "1.2.2.2"
                    },
                    {
                        "question_id": 11,
                        "display_text": "Own brother, sister / relative",
                        "answer_type": "checkbox",
                        "layout": "1.3"
                    },
                    {
                        "question_id": 12,
                        "display_text": "Caste no the same as alleged relative",
                        "answer_type": "checkbox",
                        "layout": "1.3.1.1"
                    },
                    {
                        "question_id": 12,
                        "display_text": "Which color is best?",
                        "answer_type": "choice",
                        "layout": "1.3.1.2",
                        "options": [
                            {1: "Red"},
                            {2: "Yellow"},
                            {3: "Blue"},
                            {4: "Green"},
                        ]
                    },
                    {
                        "question_id": 13,
                        "display_text": "Which color is worst?",
                        "answer_type": "choice",
                        "layout": "1.3.1.3",
                        "options": [
                            {1: "Red"},
                            {2: "Yellow"},
                            {3: "Blue"},
                            {4: "Green"},
                        ]
                    },

                ],
                "prompts": [{
                    "display_text": "Are you meeting someone in India?",
                    "layout": "1.1.1"
                },{
                    "display_text": "Was she traveling with someone earlier?",
                    "layout": "1.1.2"
                },{
                    "display_text": "Ask when she was married",
                    "layout": "1.2.1"
                },{
                    "display_text": "Ask when they met",
                    "layout": "1.2.2"
                },{
                    "display_text": "Check citizenship cards",
                    "layout": "1.3.1"
                }
                ]
            }]
        });
    }

}