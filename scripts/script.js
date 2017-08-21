  $(".play").click(function(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var stat=url.includes("youtube.com/watch");
    if(stat){
      $.post('https://play.sdslabs.co.in/youtube',{link:url}, "json").fail( function(s,msg,e){
        if(e=="Forbidden"){
          alert("You got to be inside the lab to play in the lab");
        }
        else{
          alert("Cannot play the song .... Sorry");
        }
      });
    }
    else{
      alert("Not on the right page ..... go to youtubes official website");
    }
  }); 
  });
  $(".voldown").click(function(){
    $.get("https://play.sdslabs.co.in/volume/down");
  });
  $(".volup").click(function(){
    $.get("https://play.sdslabs.co.in/volume/up");
  });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

});
