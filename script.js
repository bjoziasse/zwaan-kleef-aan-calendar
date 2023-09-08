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

eventClick: function(info) {
    document.getElementById('modalTitle').textContent = info.event.title;
    document.getElementById('modalDescription').textContent = info.event.description;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
