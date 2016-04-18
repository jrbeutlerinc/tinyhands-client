export default class EventCalendarController {
    constructor($uibModal, EventsService) {
        'ngInject';
        console.log($uibModal);
        this.modal = $uibModal;
        this.eventSources = [
           {
               events: (start, end, timezone, callback) => {
                   let formattedStart = start.format('YYYY-MM-DD');
                   let formattedEnd = end.format('YYYY-MM-DD');
                   EventsService.getCalendar(formattedStart, formattedEnd).then((results) => {
                       callback(results.data);
                    });
               }
           }
        ];

        this.calendarConfig = {
            header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
            defaultDate: this.getToday(),
			editable: false,
			eventLimit: true, // allow "more" link when too many events
            eventClick: (event) => {
                this.onCalendarEventClicked(event);
            },
        }
    }

    // functions
    getToday () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        }
        if(mm<10) {
            mm='0'+mm
        }
        today = yyyy+'-'+mm+'-'+dd;
        return today;
    }

    onCalendarEventClicked (event) {
        console.log(this);
        this.modal.open({
            templateUrl: 'app/events/calendar/eventModal.html',
            controller: 'EventModalController',
            controllerAs: 'modalCtrl',
            bindToController: true,
            resolve: {
                event: function () {
                    return event;
                }
            }
        })
    }
}
