
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('click', function () {
        toggleMute(video);
    });

    video.addEventListener('play', function () {
        video.muted = true; // Fillimisht, video është i mutuar
    });

    function toggleMute(videoElement) {
        videoElement.muted = !videoElement.muted; // Ndrysho gjendjen e muting
    }
});