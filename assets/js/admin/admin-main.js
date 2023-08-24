$(document).ready(function (){
  setButtonsEvent();
  setMenuAction();
})

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

        let iconArrows = $(item).find('.arrow-icon')
        toggleArrowIcon (iconArrows)
        event.stopPropagation();
      })
  })
}

function toggleMenu(childMenu){
  if (childMenu != undefined){
    childMenu.toggleClass('open')
  }
}
function toggleArrowIcon(iconArrows){
  $(iconArrows).each(function(index, item){
    $(item).toggleClass('open')
  })
}

function redirect(url){
  window.location.href = url;
}