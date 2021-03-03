

    $(function(){

        if($(window).scrollTop() >= 20){
                    $('.header-wrapper').addClass('active_scroll');
                }else{
                    $('.header-wrapper').removeClass('active_scroll');
                }
        
        });
        
        
        $(window).scroll(function(){
        
        
        if($(window).scrollTop() >= 20){
                    $('.header-wrapper').addClass('active_scroll');
                }else{
                    $('.header-wrapper').removeClass('active_scroll');
                }
        
        });
    
   