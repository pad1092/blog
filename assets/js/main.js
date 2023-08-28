const PRINT = function(str){console.log(str)}
$(document).ready(function () {
  setButtonsEvent();
  smoothScroll();
})

function setButtonsEvent() {
  let searchModal = $('.robusta-search');

  $('#search-btn').click(function(){
    searchModal.removeClass('close');
    searchModal.addClass('open');
  })

  window.onclick = function(event) {
    if (event.target == searchModal[0]){
      searchModal.removeClass('open');
      searchModal.addClass('close');
    }
  }
}

function toggleDropdownMenu() {
  $('.drop-down-menu').toggleClass('open')
}
function smoothScroll(){
  document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link
            
            var targetId = link.getAttribute('href'); // Get the target ID from the link's href
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate the scroll position to the target element
                var scrollToPosition = targetElement.offsetTop;
                
                // Scroll to the calculated position
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth' // Use smooth scrolling behavior
                });
            }
        });
    });
});
}