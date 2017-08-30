$(document).ready(function () {
  
  $('a.Homepage').onclick(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('.able').not('Homepage').removeClass('able').addClass('disabled');
    $('.Homepage').addClass('able').removeClass('disable');
  })

  $('a.Portfolio').onclick(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('.able').not('Portfolio').removeClass('able').addClass('disabled');
    $('.Portfolio').addClass('able').removeClass('disable');
  })

  $('a.CV').onclick(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('.able').not('CV').removeClass('able').addClass('disabled');
    $('.CV').addClass('able').removeClass('disable');
  })

  $('a.Contact').onclick(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('.able').not('Contact').removeClass('able').addClass('disabled');
    $('.Contact').addClass('able').removeClass('disable');
  })
})


