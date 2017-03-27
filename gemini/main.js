$(document).ready(function(e) {
  $('.tutorialvideos').slick({
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
    ]
  });

  $('.tutorialvideos div').click(function(e) {
    vimeoid = $(this).attr('data-vimeoid');
    $('#vimeoModal .modal-body').html('<iframe src="https://player.vimeo.com/video/' + vimeoid + '?autoplay=0&title=0&byline=0&portrait=0" width="100%" height="400px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    $("#vimeoModal").modal('show');
    e.preventDefault();
    e.stopPropagation();
  });

});

