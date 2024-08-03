document.addEventListener('DOMContentLoaded', function () {
  const currentDateElement = document.getElementById('currentDate');
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  currentDateElement.innerText = currentDate.toLocaleDateString(
    'en-US',
    options
  );

  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: loadEventsFromLocalStorage(), 
    select: function (info) {
      var title = prompt('Enter Event Title:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: info.startStr,
          end: info.endStr,
          allDay: info.allDay,
        });
        saveEventsToLocalStorage(calendar.getEvents());
        updateLessonMessage();
      }
      calendar.unselect();
    },
    eventClick: function (info) {
      if (confirm('Do you want to delete this event?')) {
        info.event.remove();
        saveEventsToLocalStorage(calendar.getEvents());
        updateLessonMessage();
      }
    },
  });
  calendar.render();
  function updateLessonMessage() {
    var eventsToday = calendar.getEvents().filter(event => {
      return (
        event.start.getFullYear() === currentDate.getFullYear() &&
        event.start.getMonth() === currentDate.getMonth() &&
        event.start.getDate() === currentDate.getDate()
      );
    });

    if (eventsToday.length > 0) {
      var eventTitles = eventsToday
        .map(event => `<span class="event-title">${event.title}</span>`)
        .join(', ');
      document.getElementById('lessonMessage').innerHTML =
        'For today you have scheduled: ' + eventTitles;
    } else {
      document.getElementById('lessonMessage').innerText =
        'You have no lessons scheduled for today';
    }
  }

  updateLessonMessage();

  document
    .getElementById('scheduleButton')
    .addEventListener('click', function () {
      document.getElementById('calendarModal').style.display = 'flex';
    });

  window.addEventListener('click', function (event) {
    var modal = document.getElementById('calendarModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function saveEventsToLocalStorage(events) {
    var eventsArray = events.map(event => {
      return {
        title: event.title,
        start: event.startStr,
        end: event.endStr,
        allDay: event.allDay,
      };
    });
    localStorage.setItem('calendarEvents', JSON.stringify(eventsArray));
  }

  function loadEventsFromLocalStorage() {
    var events = localStorage.getItem('calendarEvents');
    return events ? JSON.parse(events) : [];
  }
});
