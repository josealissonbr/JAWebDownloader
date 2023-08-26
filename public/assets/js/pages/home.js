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
