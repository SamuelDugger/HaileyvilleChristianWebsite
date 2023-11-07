async function fetchEvents() {
  try {
    const response = await fetch("./json/events.json");
    const eventsData = await response.json();

    // Populate the event cards in the events section
    populateEventCards(eventsData);

    // Populate the first two event cards in the footer
    populateFooterEvents(eventsData);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function populateEventCards(eventsData) {
  const eventsContainer = document.getElementById("events-container");

  eventsData.forEach((event) => {
    const eventCard = createEventCard(event);
    eventsContainer.appendChild(eventCard);
  });
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

function createEventCard(event) {
  const card = document.createElement("div");
  card.classList.add("blog-card");

  const figure = document.createElement("figure");
  figure.classList.add("card-banner", "img-holder");
  figure.style.backgroundImage = `url(${event.image})`;

  const image = document.createElement("img");
  image.src = event.image;
  image.alt = event.title;
  image.classList.add("img-cover");
  figure.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const title = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.href = "#";
  titleLink.textContent = event.title;
  title.appendChild(titleLink);
  cardContent.appendChild(title);

  const cardDate = document.createElement("div");
  cardDate.classList.add("card-date");

  const dateIcon = document.createElement("ion-icon");
  dateIcon.name = "calendar-outline";
  dateIcon.setAttribute("aria-hidden", "true");
  dateIcon.classList.add("date");
  cardDate.appendChild(dateIcon);

  const date = document.createElement("time");
  const dateComponents = event.date.split("-");
  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]) - 1;
  const day = parseInt(dateComponents[2]);
  const eventDate = new Date(year, month, day);

  date.datetime = eventDate.toISOString();
  date.classList.add("date");
  date.textContent = eventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  cardDate.appendChild(date);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  const monthDay = document.createElement("div");
  monthDay.classList.add("month-day");
  monthDay.textContent = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  dateContainer.appendChild(monthDay);

  figure.appendChild(dateContainer);

  const description = document.createElement("p");
  description.classList.add("desc");
  description.textContent = event.description;

  cardContent.appendChild(cardDate);
  cardContent.appendChild(description);
  card.appendChild(figure);
  card.appendChild(cardContent);

  return card;
}

fetchEvents();
