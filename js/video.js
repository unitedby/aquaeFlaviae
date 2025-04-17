
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle video play after user interaction
    function enableVideoPlay(videoId, overlayId) {
        var video = document.getElementById(videoId);
        var overlay = document.getElementById(overlayId);
        
        // Try to play the video
        video.play().then(() => {
            // Autoplay is allowed
            overlay.style.display = 'none';  // Hide overlay
        }).catch(() => {
            // Autoplay was prevented
            overlay.addEventListener('click', function() {
                video.muted = false;  // Unmute video if needed
                video.play();         // Play video
                overlay.style.display = 'none';  // Hide overlay after play
            });
            overlay.style.display = 'flex';  // Show overlay
        });
    }

    // Check for Safari
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    // Handle videos for different browsers
    if (isSafari()) {
        enableVideoPlay('video1', 'playOverlay1');
        enableVideoPlay('video2', 'playOverlay2');
    } else {
        // For other browsers
        enableVideoPlay('video1', 'playOverlay1');
        enableVideoPlay('video2', 'playOverlay2');
    }
});
