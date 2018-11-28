
$(function() {

  var $this = $("#jquery-jplayer"); //实例 

  //语音相关初始化
  $this.jPlayer({
    ready: function(event) {
      $this.jPlayer("setMedia", {
        m4a: "https://v.xxt.cn/audio/YW01QZL000307.m4a",
      });
    },
    play: function() {
      $this.jPlayer("pauseOthers");
    },
    ended: function() { // The $.jPlayer.event.ended event
      $("#jp-container .jp-type-single").attr("status", 0);
      $("#jp-container .jp-type-single").children("img").attr("src", "./image/icon-player.png");
    },
    cssSelectorAncestor: "#jp-container",
    swfPath: "../plugins/jPlayer/2.9.2/jplayer",
    supplied: "m4a",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: false,
    toggleDuration: true,
    timeFormat: {
      showMin: false,
      padSec: false,
      sepSec: "''"
    }
  });

  //点击播放与关闭语音
  $(".jp-type-single").click(function() {
    var status = $(this).attr("status");
    if(status == 0) { //需要播放
      $(this).attr("status", 1);
      $(this).children("img").attr("src", "./image/icon-player.gif");
      $this.jPlayer("play");
    } else { //需要关闭
      $(this).attr("status", 0);
      $(this).children("img").attr("src", "./image/icon-player.png");
      $this.jPlayer("stop");
    }
  });

});