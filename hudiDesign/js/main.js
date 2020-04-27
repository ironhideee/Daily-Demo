$(document).ready(function(){ 

// window.location.href=document.referrer; 
// javascript:window.history.forward(1); 

if($('.mainimg').length > 0){ 
	$(".level1").addClass("level1page")
}

$('.close').click(function() {
  var ar = $(this).attr("dataid");
  ar = 'dd'+ar;
  location.href = "#"+ar;  
	$('.maskarticle').hide();
  $(".maincontent").css("height","initial");
  $(".maincontent").css("overflow","initial");  
 });

$('.close').click(function() {
  var ar = $(this).attr("dataid");
  ar = 'dd'+ar;
  location.href = "#"+ar;  
	$('.mask').hide();
  $('html,body').removeClass('ovfHiden');
 });


$('.m_close').click(function() {
  $('.m_menu').hide();
  $('html,body').removeClass('ovfHiden');
 });
$('.m_menu_btn').click(function() {
  $('html,body').addClass('ovfHiden');
  $('.m_menu').css({
    "display":"block",
     "z-index": "999",
     "height": function () { $(window).height(); },   
     "width": function () { return $(document).width(); },
     "left":"0",
     "top": "0"
  });
  $('.m_menu').show();
 });


$('.listrow_record').click(function() {
  $(".maincontent").css("height","0");
  $(".maincontent").css("overflow","hidden");//禁止滚动

  $('.maskarticle').css({
    "display":"block",
    "height": function () { $(window).height(); },  
     "z-index": "999"
  })

  var GET = $.urlGet(); //获取URL的Get参数
	var sub = GET['sub']; //取得id的值
	var sub='sub='+sub;
  var dataida = $(this).attr("data-id");
	dataid='id='+ dataida; 
  str=dataid+'&'+sub;
  $("#content").load(`./upload/${dataida}/${dataida}.html`);
	// $.ajax({
  //              type: "GET",
  //              url: "record_show.php",
  //              data: id=str,//在php中data: "name=$tt&id=$id&content="+text,
  //              success: function(result){$('.articledetails').html(result); },
  //              // async: false
  //           });
  $('.close').attr('dataid',dataida);

 });

$('.listrow_project').click(function() {
	$('html,body').addClass('ovfHiden');
	$('.mask').css({
    "display":"block",
    "height": function () { $(window).height(); },  
     "z-index": "999"
	});

	var GET = $.urlGet(); //获取URL的Get参数
	var sub = GET['sub']; //取得id的值
	var sub='sub='+sub;
  var dataida = $(this).attr("data-id");
 	dataid='id='+ dataida;
	str=dataid+'&'+sub;
	//url='project_show.php?'+str;
  url=`./project_detail/${dataida}/${dataida}.html`

  $('iframe').css({
    "height":function () { return $(window).height() ; }
  });
  
  $('iframe').attr('src',url);
  $('.close').attr('dataid',dataida);
	// $.ajax({
 //               type: "GET",
 //               url: "project_show.php",
 //               data: id=str,//在php中data: "name=$tt&id=$id&content="+text,
 //               success: function(result){          	
 //               	$('.artdetails').html(result); },
 //               // async: false
 //            });
             // $(".artdetails").html(xxx); 

 });

// $(window).resize(function() {  
//  $('.mask').css({
//                  "height":"100%",   
//                  "width": "100%"
//               });
// });


$('.listrow').on('touchstart',function(){
              // $(this).addClass('animated flipInX');
               $(this).removeClass('graynone');
              
              
        });
               //touchend   手指放开发生
$('.listrow').on('touchend',function(){
            // $(this).removeClass('animated flipInX graynone'); 
            $(this).addClass('graynone');         
           
        });


//获取get值

(function($)
{
    $.extend(
    {
//        
//          url get parameters
//          public
//         return array()
//       
        urlGet:function()
        {
            var aQuery = window.location.href.split("?");//取得Get参数
            var aGET = new Array();
            if(aQuery.length > 1)
            {
                var aBuf = aQuery[1].split("&");
                for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
                {
                    var aTmp = aBuf[i].split("=");//分离key与Value
                    aGET[aTmp[0]] = aTmp[1];
                }
            }
            return aGET;
        },
    });
})(jQuery);


});


