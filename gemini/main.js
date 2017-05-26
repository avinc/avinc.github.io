$(document).ready(function(e) {

  adformatinfo = {
    searchad : {
      title : "Search Link Ad",
      img : ["./images/mocks/searchAds.mp4"],
      infotext : "This is lorem text"
    },
    imagead : {
      title : "Image Ad",
      img : ["./images/mocks/singleImageAd.mp4"],
      infotext : "This is lorem text"
    },
    videoad : {
      title : "Video Ad",
      img : ["./images/mocks/MailAdMobileGIF.gif"],
      infotext : "This is lorem text"
    },
    appinstallad : {
      title : "App Install Ad",
      img : ["./images/mocks/appInstallAd.mp4"],
      infotext : "This is lorem text"
    },
    tumblrad : {
      title : "Tumblr Sponsored post",
      img : ["./images/mocks/MailAdMobileGIF.gif"],
      infotext : "This is lorem text"
    },
    carouselad : {
      title : "Carousel Ad",
      img : ["./images/mocks/carouselAds.mp4"],
      infotext : "This is lorem text"
    },
    mailad : {
      title : "Mail Ad",
      img : ["./images/mocks/MailAd.mp4"],
      infotext : "On user-click, the Yahoo Mail Ad displays in the Mail message pane, displaying as if the user had opened a marketing email from the advertiser. Users can interact with the HTML content in the message, forward it to friends and family, save it to their inbox"
    }
  };

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

  $('#adformats div.card').click(function(e) {
    adid = $(this).attr('data-adformatid');
    $('#adformatModal .modal-title').html(adformatinfo[adid].title);
    // $('#adformatModal .modal-body').html('<img src="' + adformatinfo[adid].img[0] + '"/><p class="infotext">' + adformatinfo[adid].infotext + '</p>');
    $('#adformatModal .modal-body').html('<video type="video/mp4" src="' + adformatinfo[adid].img[0] + '" loop muted autoplay/><p class="infotext"></video>' + adformatinfo[adid].infotext + '</p>');
    $("#adformatModal").modal('show');
    e.preventDefault();
    e.stopPropagation();
  });

  $('.createAdBtn').click(function() {
    location.href="https://gemini.yahoo.com/advertiser/accounts";
  });

});

