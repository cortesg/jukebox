$(document).ready(function(){
	
	function Jukebox(){
		this.song = 0; //initialize this.song (explained below)
	}

	//$("audio") targets audio tags in my html file
	Jukebox.prototype.play = function(){ //this .play is the one we can call below since it inherits from jukebox
 		$("audio")[this.song].play(); //this .play is the one built-into javascript
 		//if you press play when you first go on the page, since this.song is initialized to 0, this reads as $("audio")[0]. $("audio")[0] is the first audio tag in the html file, so it will play the first song.
 		// $("audio")[1] is the second audio tag and so on
	}

	Jukebox.prototype.pause = function(){ //this .pause is the one going to be called below
		$("audio")[this.song].pause(); //this .pause is built-in
	}

	Jukebox.prototype.stop = function(){
		$("audio")[this.song].currentTime = 0; //(.currentTime = 0) puts the song at the beginning
		$("audio")[this.song].pause(); //if a song is playing already, it automatically keeps playing if you dont call pause function
	}

	Jukebox.prototype.rewind = function(){
		$("audio")[this.song].currentTime = 0; 
	}

	//automatically plays the song before the one being played; plays the first song from the start if it's on the first song
	Jukebox.prototype.last = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		//if it's the first song, go to the last song in the list (the fifth song)
		if(this.song == 0) {     
			this.song = 4
			$("audio")[this.song].play();
			//anything with $("change") changes the background image, only differences are what's in src
			$("#change").html("<img src='images/nba.png' id='background'>")
		} else {
			//if it's not the first song, make it so that this.song is the song before
			this.song--
			if(this.song == 1) {
     			$("#change").html("<img src='images/scrubs.jpg' id='background'>")
	     	} else if(this.song == 2) {
     			$("#change").html("<img src='images/friends.jpg' id='background'>") 
     		} else if(this.song == 3) {
     			$("#change").html("<img src='images/avengers.jpg' id='background'>")
     		} else if(this.song == 0) {
     			$("#change").html("<img src='images/pokemon.png' id='background'>")
 			}
			$("audio")[this.song].play();
		}
	}

	//automatically plays the next song, goes back to first song if it's on the last song
	Jukebox.prototype.skip = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		if(this.song < 4) {
			//if it's not the last song, make it so that this.song is the next song
			this.song++
			if(this.song == 1) {
     			$("#change").html("<img src='images/scrubs.jpg' id='background'>")
	     	} else if(this.song == 2) {
     			$("#change").html("<img src='images/friends.jpg' id='background'>") 
     		} else if(this.song == 3) {
     			$("#change").html("<img src='images/avengers.jpg' id='background'>")
     		} else if(this.song == 4) {
     			$("#change").html("<img src='images/nba.png' id='background'>")
 			}
			$("audio")[this.song].play();
		} else if(this.song == 4){
			//if it's the last song, go to the first song
			this.song = 0
			$("audio")[this.song].play();
			$("#change").html("<img src='images/pokemon.png' id='background'>")
		}
	}

	//plays a random song
	Jukebox.prototype.random = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// var angle = 0;
// 		setInterval(function(){
   //          angle+=2;
			// $("#random").rotate(angle);
   //  		},100);
		//NOTE TO SELF - try to randomize to a song that's not the current song
		this.song = Math.floor((Math.random() * 5)); //index is a random number between 0 and 5, not including 5.
		if(this.song == 0) {
 			$("#change").html("<img src='images/pokemon.png' id='background'>")
 		} else if(this.song == 1) {
 			$("#change").html("<img src='images/scrubs.jpg' id='background'>")
 		} else if(this.song == 2) {
 			$("#change").html("<img src='images/friends.jpg' id='background'>") 
 		} else if(this.song == 3) {
 			$("#change").html("<img src='images/avengers.jpg' id='background'>")
 		} else if(this.song == 4) {
 			$("#change").html("<img src='images/nba.png' id='background'>")
 		}
		$("audio")[this.song].play();
	}

	//below are the playlist functions
	Jukebox.prototype.play0 = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// $("#change").fadeOut(1000)
		this.song = 0
		$("#change").html("<img src='images/pokemon.png' id='background'>")
		// $("#change").fadeIn(1000)
		$("#pokemon").effect( "shake", {times:3, distance:3, direction:"down"},300);
		$("audio")[this.song].play(); 
	}
	Jukebox.prototype.play1 = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// $("#change").fadeOut(1000)
		this.song = 1
		$("#change").html("<img src='images/scrubs.jpg' id='background'>")
		// $("#change").fadeIn(1000)
		$("#scrubs").effect( "shake", {times:3, distance:3, direction:"down"},300);
		$("audio")[this.song].play(); 
	}
	Jukebox.prototype.play2 = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// $("#change").fadeOut(1000)
		this.song = 2
		$("#change").html("<img src='images/friends.jpg' id='background'>") 
		// $("#change").fadeIn(1000)
		$("#friends").effect( "shake", {times:3, distance:3, direction:"down"},300);
		$("audio")[this.song].play(); 
	}
	Jukebox.prototype.play3 = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// $("#change").fadeOut(1000)
		this.song = 3
		$("#change").html("<img src='images/avengers.jpg' id='background'>")
		// $("#change").fadeIn(1000)
		$("#avengers").effect( "shake", {times:3, distance:3, direction:"down"},300);
		$("audio")[this.song].play(); 
	}
	Jukebox.prototype.play4 = function(){
		$("audio")[this.song].currentTime = 0;
		$("audio")[this.song].pause();
		// $("#change").fadeOut(1000)
		this.song = 4
		$("#change").html("<img src='images/nba.png' id='background'>")
		// $("#change").fadeIn(1000)
		$("#nba").effect( "shake", {times:3, distance:3, direction:"down"},300);
		$("audio")[this.song].play(); 
	}
	//above are the playlist functions

	//make a new Jukebox object
	var gino_jukebox = new Jukebox()



	//make the click events happen; 

	//this shows current time of the song
	setInterval(function(){
        $("#time").html((("0" + Math.floor($("audio")[gino_jukebox.song].currentTime / 60)).substr(-2) + ":" + (("0" + Math.floor($("audio")[gino_jukebox.song].currentTime % 60))).substr(-2)));
      	}, 1)

	$("#play").click(function(){
	gino_jukebox.play(); //.play here is taken from Jukebox.prototype.play above
	});

	$("#pause").click(function(){
	gino_jukebox.pause(); //.pause here is taken from Jukebox.prototype.pause above
	});

	$("#stop").click(function(){
	gino_jukebox.stop(); //and so on...
	});

	$("#rewind").click(function(){
	gino_jukebox.rewind();
	});

	$("#last").click(function(){
	gino_jukebox.last();
	});

	$("#skip").click(function(){
	gino_jukebox.skip();
	});

	$("#random").click(function(){
	gino_jukebox.random();
	});

	$("#pokemon").click(function(){
		gino_jukebox.play0();
	});

	$("#scrubs").click(function(){
		gino_jukebox.play1();
	});

	$("#friends").click(function(){
		gino_jukebox.play2();
	});

	$("#avengers").click(function(){
		gino_jukebox.play3();
	});

	$("#nba").click(function(){
		gino_jukebox.play4();
	});

})