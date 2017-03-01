var btn = document.createElement("BUTTON");
var t = document.createTextNode("Play On PLAY");
btn.appendChild(t);
btn.setAttribute("id","playbtn");
document.body.appendChild(btn);

$("#playbtn").click(function(){
	$.post('https://play.sdslabs.co.in/youtube',{link:window.location.href}, "json").fail( function(s,msg,e){
        if(e=="Forbidden"){
          alert("You got to be inside the lab to play in the lab");
        }
      });
});

