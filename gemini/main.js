$(document).ready(function(e) {

  adformatinfo = {
    searchad : {
      title : "Search Link Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/searchAds.mp4"],
      infotext : "<p>Search ads are highly relevant ads that reach searchers on Yahoo at the moment of intent.</p><ul><li><p>Yahoo Search reaches over <b>117M unique searchers per month</b>, 33% of which can't be found on other engines</p></li></ul>"
    },
    imagead : {
      title : "Image Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/singleImageAd.mp4"],
      infotext : "<p>Native Image Ads are image-rich ads that fit the form and function of the content around them, such as within the content stream on Yahoo properties, apps and third-party publishers.<p><ul><li><p>Compared to traditional display, native ads lift brand-related searches up to <b>3.6X</b>, and site view-through up to <b>3.9X</b>.</p></li><li><p>Results from recent attribution studies show that native ads accounted for an average <b>30% of incremental online conversions</b>, more than double the conversions driven by the next largest tactic.</p></li></ul>"
    },
    videoad : {
      title : "Video Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/videoAds.mp4"],
      infotext : "<p>Native Video Ads are clickable video ads that fit the form and function of the content around them, such as within the content stream on Yahoo properties, apps, and third-party publishers.</p><ul><li><p>Native Video Ads view and completion rates have outperformed industry averages.</li><li>Native Video Ads drove a <b>50% lift in brand favorability and 28% lift in purchase intent</b> for a retail brand in a recent study.</p></li></ul>"
    },
    appinstallad : {
      title : "App Install Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/appInstallAd.mp4"],
      infotext : "<p>App Marketing uses native image and video ads to reach over 650M mobile users across a massive mobile network of over 1,000 apps, including Yahoo, Tumblr, and top syndication partner apps.</p><ul><li><p>App users acquired with video ads have <b>up to 43% more sessions</b> compared to an average user.</li><li>Ads for apps are effective at prompting re-engagement — even if users saw the ads but did not click through, they were <b>11% more likely to reuse the app</b>.</p></li>"
    },
    tumblrad : {
      title : "Tumblr Sponsored post",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/Tumblrpost-Carousel.mp4"],
      infotext : "Tumblr Sponsored Posts feature the same native engagements from Tumblr such as Like, Reblog and Follow that brands value greatly. Yahoo’s data makes it easy for brands to reach the right audiences at scale with these seamless, impactful native ads that drive engagement."
    },
    carouselad : {
      title : "Carousel Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/carouselAds.mp4"],
      infotext : "<p>Native Carousel Ads allow advertisers to use multiple images to tell a visual story to their audience.  Each image that users swipe though can link to a unique landing page to drive deeper user engagement.</p> <ul><li><p>Carousel Ads can drive <b>2X – 3X higher CTR</b> compared to single image ads</p></li></ul> <p><i>Beta: Only available to select advertisers.</i></p>"
    },
    mailad : {
      title : "Mail Ad",
      img : ["https://s.yimg.com/av/moneyball/assets/v3/images/mocks/MailAd.mp4"],
      infotext : "Yahoo Gemini Mail Ads turn the prominently placed top ad in the user’s inbox into a truly native ad that can be read, saved or forwarded, just like an email.<ul><li><p>Mail Ads have shown <b>click-through rates as high as 4x industry averages.</b></p></li></ul>"
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
    $('#adformatModal .modal-body').html('<div class="row"><div class="col-sm-6"><video type="video/mp4" src="' + adformatinfo[adid].img[0] + '" loop muted autoplay controls/></div><div class="col-sm-6"></video><div class="infotext">' + adformatinfo[adid].infotext + '</div></div>');
    $("#adformatModal").modal('show');
    e.preventDefault();
    e.stopPropagation();
  });

  $('.createAdBtn').click(function() {
    location.href="https://gemini.yahoo.com/advertiser/accounts";
  });

});

