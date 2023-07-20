$(window).resize(function(event)  {
    adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
    var headerList=$('.list__header');
    if(w<767){
        if(!headerList.hasClass ('done')){
            headerList.addClass('done').appendTo(headerMenu);
        }
    } else{
            if(headerList.hasClass('done')){
                headerList.removeClass('done').prependTo($('.header__list-start'));
            }
        }
/*
        if(w<768){
            if(!$('.header-bottom-menu').hasClass ('done')){
                $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
            }
        } else{
            $.each($('.header-bottom-menu'),function(index, vall){
               if($(this).hasClass('header-bottom-menu--right')){
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colum').eq(2));
                }
               }
               else{
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colum').eq(0));
                }
            }
            });
            }
*/
    }
    

function adaptive_function(){
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();
