$(document).ready(function() {
    $.getJSON('reservations.json', function(data) {
        let events = data.map(reservation => {
            return {
                title: reservation.title,
                start: reservation.date,
                description: reservation.description,
                textColor: 'white',
                color: '#007aff' // iCalendar color
            };
        });

        $('#calendar').fullCalendar({
            initialView: 'dayGridMonth',
            events: events,
            eventClick: function(info) {
                alert('Reservation: ' + info.event.title + '\n\n' + info.event.description);
            }
        });
    });
});
