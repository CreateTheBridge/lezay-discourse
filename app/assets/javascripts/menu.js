$(document).ready(function() {
  $('.tcon-menu--arrow').click(function() {
    if ($('.full-menu-container').hasClass('active')) {
      $('.full-menu-container').removeClass('active');
      $(this).removeClass('tcon-transform');
    } else {
      $('.full-menu-container').addClass('active');
    }
  });

  $('.close-nav, .tcon-transform').click(function() {
    if ($('.full-menu-container').hasClass('active')) {
      $('.full-menu-container').removeClass('active');
      $('.tcon-transform').removeClass('tcon-transform');
    }
  })
});
