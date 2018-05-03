/*---------------- Main Slider ------------------*/

$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 4000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});


/*---------------- BMI Calculator ------------------*/

var rangeSlider = function(){
  var slider = $('.row'),
      range = $('.value_range'),
      value = $('.field-text');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};
rangeSlider();

$('#submit').click(function(){
  var h = $('#height').val() / 100;
  var w = $('#weight').val();
  var bmi = h * h ;
  bmi = w/bmi;
  bmi = (bmi).toFixed(1);
  $('#bmiValue').html(bmi + " ");
  if (bmi < 18.5) {
    //Underweight
    $('.result-text').css('background','-webkit-linear-gradient(left top, #27939D, #07658F)');
    $('.result-text').css('background','-o-linear-gradient(bottom right, #27939D, #07658F)');
    $('.result-text').css('background','-moz-linear-gradient(bottom right, #27939D, #07658F)');
    $('.result-text').css('background','linear-gradient(to bottom right, #27939D, #07658F)');
    $('#bmid').html("Underweight");
  } else if ((18.5 <= bmi) && (bmi <= 24.9)) {
    //Normal weight
    $('.result-text').css('background','-webkit-linear-gradient(left top, #4FD24D, #4CA456)');
    $('.result-text').css('background','-o-linear-gradient(bottom right, #4FD24D, #4CA456)');
    $('.result-text').css('background','-moz-linear-gradient(bottom right, #4FD24D, #4CA456)');
    $('.result-text').css('background','linear-gradient(to bottom right, #4FD24D, #4CA456)');
    $('#bmid').html("Normal");
  } else if ((25 <= bmi) && (bmi <= 29.9)) {
    //Overweight   
    $('.result-text').css('background','-webkit-linear-gradient(left top, #EF7532, #DC3A26)');
    $('.result-text').css('background','-o-linear-gradient(bottom right, #EF7532, #DC3A26)');
    $('.result-text').css('background','-moz-linear-gradient(bottom right, #EF7532, #DC3A26)');
    $('.result-text').css('background','linear-gradient(to bottom right, #EF7532, #DC3A26)');
    $('#bmid').html("Overweight");
  } else {
    //Obese
    $('.result-text').css('background','-webkit-linear-gradient(left top, #F73946, #FF3875)');
    $('.result-text').css('background','-o-linear-gradient(bottom right, #F73946, #FF3875)');
    $('.result-text').css('background','-moz-linear-gradient(bottom right, #F73946, #FF3875)');
    $('.result-text').css('background','linear-gradient(to bottom right, #F73946, #FF3875)');
     $('#bmid').html("Obese");
  }
  console.log(bmi);
});

$('input[type="range"]').change(function () {
 var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #F73946), '
                + 'color-stop(' + val + ', #27283A)'
                + ')'
                );
});

$('.value_range').each(function (){
   var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #F73946), '
                + 'color-stop(' + val + ', #27283A)'
                + ')'
                );
});
