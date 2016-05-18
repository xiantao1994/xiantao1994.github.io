window.onload = function(){
	var musBtn = document.getElementById("music-button");
	var audio = document.getElementById('myAudio');
	//console.info(audio);
	
	musBtn.addEventListener("click",function(e){
		if(audio.paused){
			audio.play();
			musBtn.className="music-button"
		}else{
			audio.pause();
			musBtn.className="music-button_stop"
		}
	})

}

