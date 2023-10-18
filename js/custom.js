
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
    const cursorDot = document.getElementById('cursor-dot');
    var mouseX = 0
    var mouseY = 0
    var pY = 0
    var pX = 0

    // Function to update the cursor-dot position
    function moveCursorDot(event) {
        mouseX = (event.clientX - cursorDot.clientWidth / 1.5);
        mouseY = (event.clientY - cursorDot.clientHeight / 1.5);
    }
    setInterval(function(){
      pY += (mouseY - pY) / 15
      pX += (mouseX - pX) / 15
      cursorDot.style.left = pX + 'px'
      cursorDot.style.top = pY + 'px'
    }, 10)
    
    // Add an event listener to track cursor movement
    document.addEventListener('mousemove', moveCursorDot);
  })(window.jQuery);


