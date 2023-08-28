$('.offcial-partner-home2-featured').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false
});

function createVideoDownloadComponent(item){
    let videoListEl = $('.video-list');

    let uuid = Math.random();

    let videoDownloadComponent = `
    <div class="notification-page-sec video-item" video-uuid="${uuid}">
        <div class="notification-img">
            <img src="assets/images/notification/notification-1.png" alt="notification-img">
        </div>
        <div class="notification-content">
            <p class="noti-title">$VIDEO.NAME</p>
            <p class="noti-subtitle mt-8">32m</p>
        </div>
    </div>
    `;

    videoListEl.prepend(videoDownloadComponent);

    $(`[video-uuid="${uuid}"]`).hide();
    $(`[video-uuid="${uuid}"]`).fadeIn();
}

$("#video-download-form").submit(function(e) {
    e.preventDefault();

    let videoUrl = $('#video-url').val();

    if(videoUrl == ''){
        alert('Please enter video url');
        return;
    }

    /*$.ajax({
        url: 'https://nodetent.com/projects/mokoviralyoutube/includes/youtube.php',
        type: 'POST',
        data: {
            url: videoUrl
        },
        success: function(response) {
            var div = document.createElement('DIV');

            div.innerHTML = response;

        },
    });*/

    var form = new FormData();
    form.append("url", "https://youtu.be/WbJNkH-pDd8");

    var settings = {
    "url": "https://nodetent.com/projects/mokoviralyoutube/includes/youtube.php",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
    };

    $.ajax(settings).done(function (response) {
    console.log(response);
    });
});
