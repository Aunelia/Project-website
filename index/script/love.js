$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

  /* youtube */ 

  var videoContainer = document.getElementById("youtube");
  var embedCode =<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=DwD-nhiO7ivjDQ0c&amp;list=PL_lr5HGHRaG0xzgjfFNU8Ph54cV2gW4jd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  videoContainer.innerHTML = embedCode;