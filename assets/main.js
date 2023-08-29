  // cursor movement 
  
  document.addEventListener('mousemove', (event) => {
    const cursor = document.getElementById('cursor');
    const innerCursor = document.getElementById('inner-cursor');
    const x = event.clientX;
    const y = event.clientY;
  
    const cursorRect = cursor.getBoundingClientRect();
      const innerCursorRect = innerCursor.getBoundingClientRect();
  
      const cursorCenterX = cursorRect.left + cursorRect.width / 2;
      const cursorCenterY = cursorRect.top + cursorRect.height / 2;
  
      const maxRadius = cursorRect.width / 2 - innerCursorRect.width / 2;
  
      const deltaX = x - cursorCenterX;
      const deltaY = y - cursorCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
      let newInnerCursorX = cursorCenterX;
      let newInnerCursorY = cursorCenterY;
  
      if (distance > maxRadius) {
          const angle = Math.atan2(deltaY, deltaX);
          newInnerCursorX = cursorCenterX + Math.cos(angle) * maxRadius;
          newInnerCursorY = cursorCenterY + Math.sin(angle) * maxRadius;
      } else {
          newInnerCursorX = x;
          newInnerCursorY = y;
      }
  
    cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
    innerCursor.style.left = `${x - innerCursor.offsetWidth / 2}px`;
    innerCursor.style.top = `${y - innerCursor.offsetHeight / 2}px`;
  
    const links = document.querySelectorAll('a');
  
      links.forEach((link) => {
          link.addEventListener('mouseover', () => {
              cursor.style.opacity = '0';
              innerCursor.style.transform = 'scale(5.5)';
          });
  
          link.addEventListener('mouseout', () => {
              cursor.style.opacity = '1';
              innerCursor.style.transform = 'scale(1)';
          });
      });

    });
    

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.getAttribute('href'));
  
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Page transitions
    $('body').addClass('loading');
  
    $(window).on('load', function() {
      setTimeout(function() {
        $('body').removeClass('loading');
        $('section').eq(0).addClass('active');
      }, 1000);
    });
      
  
  
  