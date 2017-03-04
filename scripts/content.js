var btn = document.createElement("BUTTON");
var t = document.createTextNode("Play On PLAY");
btn.appendChild(t);
btn.setAttribute("id","playbtn");
document.body.appendChild(btn);
if(window.location.href.includes("&list=")||window.location.href.includes("list=")){
	var btn2 = document.createElement("BUTTON");
	var t2 = document.createTextNode("Play Playlist");
	btn2.appendChild(t2);
	btn2.setAttribute("id","playlistbtn");
	document.body.appendChild(btn2);
	var link=window.location.href;
	$("#playlistbtn").click(function(){
		link=link.split("&");
		var listlink="https://www.youtube.com/playlist?"+link[2];
		$.post('https://play.sdslabs.co.in/youtube',{link:listlink}, "json").fail( function(s,msg,e){
	        if(e=="Forbidden"){
	          alert("You got to be inside the lab to play in the lab");
	        }
      });
	});
}
$("#playbtn").click(function(){
	$.post('https://play.sdslabs.co.in/youtube',{link:window.location.href}, "json").fail( function(s,msg,e){
        if(e=="Forbidden"){
          alert("You got to be inside the lab to play in the lab");
        }
      });
});