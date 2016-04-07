export default class EventCalendarCtrl {
    constructor($modal) {
        'ngInject';

        this.eventSources = [
            {
                url: '/api/event/feed/calendar',
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
            eventClick: this.onCalendarEventClicked,
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
        $modal.open({
            templateUrl: 'modal.html',
            controller: 'EventModalCtrl',
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
