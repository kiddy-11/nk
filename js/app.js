$(function () {
  $('#active_menu_btn').on('click', function () {
     $('#main_menu ul, #nav .navbar-brand').toggleClass('active')
  })

  $('.banner_slider').slick({
    prevArrow: $ ('.banner_arrow_left'),
    nextArrow: $ ('.banner_arrow_right'),
    autoplay:true,
    autoplay:900,
    autoplaySpeed:1500,
  })
  $('.counter_number').counterUp({
		time: 3000
	});
  $('.blog_slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    centerPadding:'0', 
    autoplay:true,
    autoplaySpeed:1500,
    autoplay:900,  
  })
$('.test_dtl').slick({
  slidesToShow:1,
  slidesToScroll:1,
  arrows: false,
  fade: true,
  asNavFor: '.client_img'
})
$('.client_img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.test_dtl',
  dots: false,
  centerPadding:0,
  arrows:true,
  nextArrow:$('.clienticon_left'),
  prevArrow:$('.clienticon_right'),
  centerMode: true,
  focusOnSelect: true

})
$('.sponsor_img').slick({
  infinite:true,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $ ('.sponsor_left_1'),
  nextArrow: $ ('.sponsor_right_1'),
  autoplay:900,
  centerMode:true,
  centerPadding:'0px',
  autoplaySpeed:900,
  dots:false,
})
})