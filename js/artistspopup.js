document.addEventListener('DOMContentLoaded', function() {
    // Function to open the artist details
    function openArtistDetails(artistId) {
        var artistDetail = document.getElementById(artistId);
        artistDetail.style.display = 'block';
    }

    // Function to close all artist details
    function closeArtistDetails() {
        var artistDetails = document.querySelectorAll('.artists-hover');
        artistDetails.forEach(function(detail) {
            detail.style.display = 'none';
        });
    }

    // Event listener to open artist details
    document.querySelectorAll('.artists-btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents click from propagating to the window
            var artistId = this.getAttribute('data-modal');
            openArtistDetails(artistId);
        });
    });

    // Event listener to close artist details when clicking outside of the artist details
    window.addEventListener('click', function(event) {
        // Check if the click was outside of any artist detail
        if (!event.target.closest('.artists-thumb') && !event.target.closest('.artists-btn')) {
            closeArtistDetails();
        }
    });

    // Close artist details when clicking inside the artist thumbnail
    document.querySelectorAll('.artists-thumb').forEach(function(thumb) {
        thumb.addEventListener('click', function(event) {
            // Check if the click was on an artist detail
            if (event.target.closest('.artists-thumb')) {
                closeArtistDetails();
            }
        });
    });
});
