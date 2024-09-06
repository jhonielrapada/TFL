
 

document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer1 = document.getElementById('videoPlayer1');
    var videoPlayer2 = document.getElementById('videoPlayer2');

    function playNextVideo() {
        if (videoPlayer1.style.display !== 'none') {
            videoPlayer1.style.display = 'none'; // Hide the first video
            videoPlayer2.style.display = 'block'; // Show the second video
            videoPlayer2.play(); // Start playing the second video
        } else {
            videoPlayer2.style.display = 'none'; // Hide the second video
            videoPlayer1.style.display = 'block'; // Show the first video
            videoPlayer1.play(); // Start playing the first video
        }
    }

    videoPlayer1.addEventListener('ended', playNextVideo);
    videoPlayer2.addEventListener('ended', playNextVideo);

    // Start with videoPlayer1
    videoPlayer1.play();
});
