/**
 * Created by Administrator on 2016/5/31.
 */
'use strict';

$(function(){
    $('#demoList li').on('click',function(ev){
        if(ev.target.className == 'parent'){
            if($('.child').eq($(this).index()).css('display') == 'block'){
                $('.child').eq($(this).index()).slideUp();
            }else{
                $('.child').eq($(this).index()).slideDown();
            }
        }
    });


    $("#demoList").slimScroll({
        height: $(window).height()-60,
        color: '#ffcc00',
        alwaysVisible: true
    });

});
$(window).on("resize",function(){
    $("#demoList").slimScroll({
        height: $(window).height()-60,
        color: '#ffcc00',
        alwaysVisible: true
    });
});
