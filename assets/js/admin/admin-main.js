$(document).ready(function (){
  initRichTextEditor();
  setButtonsEvent();
  setMenuAction();
})
  

function initRichTextEditor (){
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
    content_css: '../assets/css/content.min.css'
});
}
function setButtonsEvent(){
  let pannelElm = $('#pannel')
  let contentElm = $('#content')
  $('.menu-toggle').click(function(){
    pannelElm.toggleClass('pannel_close')
    pannelElm.toggleClass('pannel_open')
    contentElm.toggleClass('content_expand')
    contentElm.toggleClass('content_collapse')
  })
}

function setMenuAction(){
  $('.pannel-item').each(function(index, item){
      $(item).click(function(event){
        let childMenu = $(item).children('.pannel-item_child').first();
        childMenu = childMenu.prop("tagName") == 'UL' ? childMenu : undefined;
        toggleMenu(childMenu);
        event.stopPropagation();
      })
  })
}

function toggleMenu(childMenu){
  if (childMenu != undefined){
    childMenu.toggleClass('open')
  }
}
