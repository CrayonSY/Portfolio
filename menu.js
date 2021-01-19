(jQuery)(function($) {
    var opened = false;
    $('.btn').on('click',function(){
        $(this).toggleClass('open');
        if(opened){
            $('.nav-list').stop(true).animate({
                left: '-40rem'
            }, 300);
            opened = false;
        }
        else{
            $('.nav-list').stop(true).animate({
                left: 0
            }, 300);
            opened=true;
        }
        return false;
    });
});