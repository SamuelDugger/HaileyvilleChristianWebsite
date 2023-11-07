const imagesPerPage = 8; // Number of images to display per page
let currentPage = 1;
let galleryData = []; // Array to store the gallery data

// Function to fetch images from gallery.json and populate in the gallery section
async function fetchGalleryImages() {
  try {
    const response = await fetch("./json/gallery.json");
    galleryData = await response.json();

    // Populate the gallery list with images for the current page
    populateGallery(currentPage);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
  }
}

function populateGallery(page) {
  const galleryList = document.getElementById("gallery-list");
  galleryList.innerHTML = ""; // Clear previous images

  const startIdx = (page - 1) * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const imagesToShow = galleryData.slice(startIdx, endIdx);

  imagesToShow.forEach((image) => {
    const imageItem = createGalleryImageItem(image);
    galleryList.appendChild(imageItem);
  });

  // Enable or disable pagination buttons based on the current page
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (page === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (endIdx >= galleryData.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function createGalleryImageItem(image) {
  const listItem = document.createElement("li");
  listItem.classList.add("grid-item");

  // Create the figure element with specified attributes
  const figure = document.createElement("figure");
  figure.classList.add("card-banner", "img-holder");
  figure.style.setProperty("--width", "422");
  figure.style.setProperty("--height", "550");

  // Create the image element with specified attributes
  const img = document.createElement("img");
  img.src = image.image;
  img.width = 422;
  img.height = 550;
  img.alt = image.title;
  img.classList.add("img-cover");

  // Append the image to the figure element
  figure.appendChild(img);

  // Append the figure element to the list item
  listItem.appendChild(figure);

  return listItem;
}
// Function to navigate to the previous page
// Function to navigate to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    populateGallery(currentPage); // Update the gallery for the previous page
  }
}

// Function to navigate to the next page
function nextPage() {
  const totalImages = galleryData.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    populateGallery(currentPage); // Update the gallery for the next page
  }
}

// Attach click event listeners to the pagination buttons
document.getElementById("prev-btn").addEventListener("click", prevPage);
document.getElementById("next-btn").addEventListener("click", nextPage);

// Call the function to fetch and populate the gallery images for the first page
fetchGalleryImages();
