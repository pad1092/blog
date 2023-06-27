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

tinymce.init({
  selector: 'textarea',
  width: 600,
  height: 300,
  plugins: [
    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
    'media', 'table', 'emoticons', 'template', 'help'
  ],
  toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
  menu: {
    favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
  },
  menubar: 'favs file edit view insert format tools table help',
  content_css: 'css/content.css'
});

