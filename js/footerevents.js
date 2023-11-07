async function fetchEvents() {
  try {
    const response = await fetch("./json/events.json");
    const eventsData = await response.json();

    // Populate the upcoming event cards in the footer
    populateFooterEvents(eventsData);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function populateFooterEvents(eventsData) {
  const firstEventContainer = document.getElementById("footer-event-1");
  const secondEventContainer = document.getElementById("footer-event-2");

  if (eventsData.length >= 1) {
    populateEventCard(eventsData[0], firstEventContainer);
  }

  if (eventsData.length >= 2) {
    populateEventCard(eventsData[1], secondEventContainer);
  }
}

function populateEventCard(event, container) {
  const titleElement = container.querySelector(".card-title");
  const imageElement = container.querySelector(".img-cover");
  const dateElement = container.querySelector(".date");

  titleElement.textContent = event.title;
  imageElement.src = event.image;
  dateElement.textContent = event.date;
}

fetchEvents();
