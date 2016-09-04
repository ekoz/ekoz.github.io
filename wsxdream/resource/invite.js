var userAgent = window.navigator.userAgent.toLowerCase();
var isWeixin = userAgent.match(/MicroMessenger/i)=='micromessenger';

function init(){
	//加载背景图
	$('body').css({background: 'url(imgs/we.jpg)'});
	
	//加载婚纱照
	for (var i=1;i<10;i++){
		$('.swiper-cell').append('<img class="swiper-slide img-slide" src="imgs/' + i + '.jpg">');
	}
	
	var swiper = new Swiper('#panel', {
 			loop: true,
 			autoplay: 5000,
 			autoplayDisableOnInteraction: false,
      //pagination: '.swiper-pagination',
      effect: 'flip',
			speed: 1200,
      grabCursor: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
  });
  
  var welcomeSwiper = new Swiper('#welcome',{
  	loop: true,
		autoplay:5000,
		speed:2000,
		grabCursor : true,
		parallax:true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
	});
	
	$('#btnPlay').click(function(){

      var isPlay = $(this).attr('_play');
      if (isPlay=='on'){
          //on 正在播放
          $(this).removeClass('fa-pause-circle').addClass('fa-play-circle').attr('_play', 'off');
          $('audio')[0].pause();
      }else{
          //off
          $(this).removeClass('fa-play-circle').addClass('fa-pause-circle').attr('_play', 'on');
          $('audio')[0].play();
      }
  });
  
  //玫瑰雨
  window.setTimeout(function(){
      $('body').snowfall({
          flakeCount: 6,
          image :'imgs/rose.png',
          minSize: 10,
          maxSize: 32
      });
      
      $('audio')[0].play();
  }, 300);
}

if (isWeixin){
    //微信浏览器中自动播放音频需要特殊处理
    document.addEventListener("WeixinJSBridgeReady", function () {
    		if (window.confirm("建议在wifi环境下访问，土豪请随意，是否继续？")){
           init();
        }else{
        	wx.closeWindow();	
        }
    }, false);
}else{
		if (window.confirm("建议在wifi环境下访问，土豪请随意，是否继续？")){
       init();
    }else{
    	window.open('about:blank', '_self').close();
    }
}