/*document.getElementsByClassName("play")[0].onclick=function(){
      alert("yeah it worked");
      console.log("how are yoyu0");
  };*/

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
