document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');

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

        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: events,
            eventClick: function(info) {
                alert('Reservation: ' + info.event.title + '\n\n' + info.event.description);
            }
        });

        calendar.render();
    });
});
