
function setupScrollListenerForVideos() {

    var videoElements = document.querySelectorAll('.video');

    videoElements.forEach(function(videoElement) {
        var iframe = videoElement;
        var player = new Vimeo.Player(iframe);
        var isVideoPlaying = false;

        player.on('loaded', function() {
            window.addEventListener('scroll', scrollHandler);
        });

        player.on('play', function() {
            isVideoPlaying = true;
        });

        player.on('pause', function() {
            isVideoPlaying = false;
        });

        function scrollHandler() {
            player.getPaused().then(function(paused) {
                if (!paused) {
                    player.pause();
                    isVideoPlaying = false;
                }
            });
        }
    });
}

setupScrollListenerForVideos();
