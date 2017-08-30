$(document).ready(function () {
  
  $('a.Homepage').click(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('div.able').not('Homepage').removeClass('able').addClass('disabled');
    $('div.Homepage').removeClass('disabled').addClass('able');
  })

  $('a.Portfolio').click(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('div.able').not('Portfolio').removeClass('able').addClass('disabled');
    $('div.Portfolio').removeClass('disabled').addClass('able');
  })

  $('a.CV').click(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('div.able').not('CV').removeClass('able').addClass('disabled');
    $('div.CV').removeClass('disabled').addClass('able');
  })

  $('a.Contact').click(function () {
    $('a.active').not(this).removeClass('active');
    $(this).addClass('active');
    $('div.able').not('Contact').removeClass('able').addClass('disabled');
    $('div.Contact').removeClass('disabled').addClass('able');
  })
})


