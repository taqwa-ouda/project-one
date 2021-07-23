



var contentNav = $('.data').offset().top

$(window).scroll(function (){
let windowScroll = $(window).scrollTop();


if(windowScroll>contentNav)
 {
   console.log("hello")
 $(".navbar").css("backgroundColor","rgba(0,0,0,0.7)");
 $("#btnUp").fadeIn(500);
}
else{
  $(".navbar").css("backgroundColor","transparent");
  $("#btnUp").fadeOut(500);

}

})

$("#btnUp").click(function()
{
  $("body,html").animate({scrollTop:'0'},1000);
})

$("a").click(function() {
 let aHref =  $(this).attr("href"); //ana dost 3la anhy link.
 let sectionOffset = $(aHref).offset().top;
  $("body,html").animate({scrollTop:sectionOffset},2000);
})

