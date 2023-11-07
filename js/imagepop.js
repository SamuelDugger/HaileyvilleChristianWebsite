const galleryList = document.getElementById("gallery-list");
const imagePopup = document.createElement("div");
imagePopup.classList.add("image-popup");
imagePopup.innerHTML = `
  <button class="close-button">X</button>
  <img src="" alt="Image" />
`;
document.body.appendChild(imagePopup);

// Function to open the image popup with the clicked image
function openImagePopup(imageSrc) {
  const popupImg = imagePopup.querySelector("img");
  popupImg.src = imageSrc;
  imagePopup.style.display = "flex";
}

// Function to close the image popup
function closeImagePopup() {
  imagePopup.style.display = "none";
}

// Attach click event listener to the gallery list to handle image clicks
galleryList.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const imageSrc = event.target.src;
    openImagePopup(imageSrc);
  }
});

// Attach click event listener to the close button to close the image popup
const closeButton = imagePopup.querySelector(".close-button");
closeButton.addEventListener("click", closeImagePopup);

// Attach click event listener to the image popup to close it when clicked outside the image
imagePopup.addEventListener("click", (event) => {
  if (event.target === imagePopup && event.target !== closeButton) {
    closeImagePopup();
  }
});
