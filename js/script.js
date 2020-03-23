var overlay = document.getElementById('overlay-video');
var vid = document.getElementById('video');

if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false);
} else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play);
}

function play() {
    if (vid.paused) {
        vid.play();
        overlay.className = "o";
    } else {
        vid.pause();
        overlay.className = "";
    }
}

$(document).ready(function () {

    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});