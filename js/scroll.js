var lastScrollTop = 0;
var bc = document.querySelector('.bottom_bar');

window.addEventListener('scroll', bringmenu, false);
function bringmenu(){
    var start = document.body.scrollTop;
    if(start > lastScrollTop){
        bc.removeAttribute('style',); 
        bc.setAttribute('style', 'display: flex;');
    }else{
        bc.removeAttribute('style');
        bc.setAttribute('style', 'display: none;');
    } 
    lastScrollTop = start;
}