var userAgent = window.navigator.userAgent.toLowerCase();
var isWeixin = userAgent.match(/MicroMessenger/i)=='micromessenger';

function init(){
	for (var i=1;i<10;i++){
		$('.swiper-cell').append('<img class="swiper-slide" src="imgs/' + i + '.jpg">');
	}

	var _cellHeight = 0;
  var scrWidth = document.documentElement.clientWidth;
  var scrHeight = document.documentElement.clientHeight;

  $('.welcome-header').arctext({radius: 300});
  $('.welcome-footer').arctext({radius: 300, dir:-1});

  if (scrWidth<scrHeight){
      //mobile
      $('.swiper-container').find('.swiper-slide').height(scrHeight-140).hide();
      
      window.setTimeout(function(){
          _cellHeight = $('.swiper-container .swiper-slide').height();
          var _top = (scrHeight - _cellHeight)/2;
          $('.swiper-cell').height(_cellHeight);
          $('.swiper-container').css({'padding-top': _top-30});
      }, 50);
  }else{
      $('.swiper-container').find('.swiper-slide').height(scrHeight).hide();
      $('.swiper-cell').height($('.swiper-container .swiper-slide').height());
  }
  var children = $('.swiper-container').find('.swiper-slide');
  $(children[0]).show();

	var ind = 1;

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

  window.setInterval(function(){
      $('.swiper-container').find('.swiper-slide').hide(1000);
      $(children[ind]).slideDown(1000);
      ind++;
      if (ind>=children.length) ind=0;
  }, 5*1000);

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