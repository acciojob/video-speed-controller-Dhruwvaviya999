const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

let video = document.querySelector(".player__video");
let toggleBtn = document.querySelector(".player_button");

	function pausePlay(){
		if(video.paused){
			video.play();
			toggleBtn.value = "❚❚";
		}else {
			video.pause();
			toggleBtn.value = "▶";
		}
	}

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
