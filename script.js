document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');

    $.getJSON('reservations.json', function(data) {
        console.log("Fetched data:", data);  // Log fetched data

        let events = data.map(reservation => {
            return {
                title: reservation.title,
                start: reservation.date,
                description: reservation.description,
                textColor: 'white',
                color: '#007aff'
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
    }).fail(function() {
        console.error("Error fetching data from reservations.json");
    });
});
