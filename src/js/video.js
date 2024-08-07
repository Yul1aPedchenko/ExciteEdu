document.querySelectorAll('.video__wrapper img').forEach(function (thumbnail) {
  thumbnail.addEventListener('click', function () {
    const videoSrc = this.getAttribute('data-video-src');
    const iframe = document.createElement('iframe');
    iframe.src = videoSrc;
    iframe.width = '560';
    iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    this.replaceWith(iframe);
  });
});
