  $(function() {
    $('#slider > div:gt(0)').hide();
    setInterval(function(){
      $('#slider > div:first')
          .fadeOut(2550)
          .next()
          .fadeIn(1500)
          .end()
          .appendTo('#slider');
    }, 6000);
  });
