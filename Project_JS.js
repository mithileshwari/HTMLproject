
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()  - 500 ){
            $(".black").css({"background-color":"rgb(235,208,171)"});
        }
        else{
            $(".black").css({"background-color":"transparent"});
        }

    })
})
// 
// $(document).ready(function(){
//      $("img.Waffel2").css({ "width": "(width.screen/4)px"});
// })
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });
