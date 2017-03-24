$(document).ready( function() {

	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Play On PLAY");
	btn.appendChild(t);
	btn.setAttribute("id","playbtn");
	document.body.appendChild(btn);
	var btn2 = document.createElement("BUTTON");
	var t2 = document.createTextNode("Play Playlist");
	btn2.appendChild(t2);
	btn2.setAttribute("id","playlistbtn");
	document.body.appendChild(btn2);
	var link=window.location.href;

	var addInstantPlay = function(inst) {
		vidGrid = document.getElementsByClassName(inst);
		var img = document.createElement("img");
		for (var i = 0; i < vidGrid.length; i++) {
			var img = document.createElement("img");
			img.setAttribute('class', 'instantPlay');
			img.setAttribute('src', 'https://www.playframework.com/assets/images/logos/play_icon_full_color.png');
			vidGrid[i].appendChild(img);
		}
	}

	if (window.location.href === "https://www.youtube.com/" || window.location.href.includes("https://www.youtube.com/results?")) {
		var instantPlayClass = "yt-lockup-video";
		addInstantPlay(instantPlayClass);
	}

	$("#playlistbtn").click(function(){
		if(window.location.href.includes("&list=")||window.location.href.includes("list=")){
			if(window.location.href.includes("&list=")){
				link=link.split("&");
				var listlink="https://www.youtube.com/playlist?"+link[2];
			}
			else
				listlink=link;
			$.post('https://play.sdslabs.co.in/youtube',{link:listlink}, "json").fail( function(s,msg,e){
		        if(e=="Forbidden"){
		          alert("You got to be inside the lab to play in the lab");
		        }
	      });
		}
		else{
			alert("For playing a playlist .... there got to be a playlist");
			prompt("Are you a noob (Y/N)");
		}
	});
	$("#playbtn").click(function(){
		$.post('https://play.sdslabs.co.in/youtube',{link:window.location.href}, "json").fail( function(s,msg,e){
	        if(e=="Forbidden"){
	          alert("You got to be inside the lab to play in the lab");
	        }
	      });
	});

	$(".instantPlay").click(function(){
		var playurl = "https://www.youtube.com/watch?v="+$(this.parentNode).attr("data-context-item-id");
		$.post('https://play.sdslabs.co.in/youtube',{link:playurl}, "json").fail( function(s,msg,e){
	        if(e=="Forbidden"){
	          alert("You got to be inside the lab to play in the lab");
	        }
	    });
	});

});