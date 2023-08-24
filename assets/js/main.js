const PRINT = function(str){console.log(str)}
$(document).ready(function () {
  setButtonsEvent();
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
