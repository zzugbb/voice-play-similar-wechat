
$(function() {

  $().ready(function(){
    $("div[id^=$_jplayer]").each(function() {
      var url = $(this).attr("url");
      var id = '#jp_container_' + $(this).attr("id").substring(15);
      $(this).jPlayer({
        ready: function(event) {
          $(this).jPlayer("setMedia", {
            mp3: '//v.xxt.cn/' + url,
            duration: "90''", 
          });
        },
        play: function() {
          $(this).jPlayer("pauseOthers");
        },
        ended: function() { // The $.jPlayer.event.ended event
          $("#jp_container_1 .jp-type-single").children("img").attr("src", "/nb/m/etest/img/icon-player.png");
          $("#jp_container_1 .jp-type-single").attr("status", 0);
        },
        cssSelectorAncestor: id,
        swfPath: "//static.xxt.cn/n/jplayer/2.9.2/jplayer",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
    })
  })

});