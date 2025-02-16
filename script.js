// Function to open the lightbox modal
function openModal(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

// Function to close the modal when clicking outside the image
function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}
