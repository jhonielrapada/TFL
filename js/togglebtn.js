// script.js

function toggleDetails(artistId) {
    var artistDetails = document.getElementById(artistId);
    var button = artistDetails.previousElementSibling;

    if (artistDetails.style.display === "none" || artistDetails.style.display === "") {
        artistDetails.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        artistDetails.style.display = "none";
        button.textContent = "Show Details";
    }
}
