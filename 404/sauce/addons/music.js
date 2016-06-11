// Music player
window.onload = function() {
    var player = document.getElementById('audio');
    var info = document.getElementById('song')

    var songs = [
      ['Sad Violin (Airhorn Edition)', '404/sauce/music/Sad Violin (Airhorn Edition).mp3'],
	  ['Rick Astley - Never Gonna Give You Up', '404/sauce/music/Rickroll.mp3'],
	  ['Undertale Soundtrack - Dogsong', '404/sauce/music/Dogsong.mp3'],
	  ['Sad Violin', '404/sauce/music/Sad Violin.mp3'],
	  ['Spooky Scary Skeleton Dance Remix', '404/sauce/music/Spooky Scary Skeleton Dance Remix.mp3'],
    ]

    function nextSong() {
      changeSong(Math.floor(Math.random() * songs.length));
    };

    function changeSong(val) {
      var newSong = songs[val][1];
      song.innerHTML = 'Now Playing: ' + songs[val][0];
      player.setAttribute('src', songs[val][1]);
      player.load();
      player.play();
      player.addEventListener('ended', nextSong);
    };

    nextSong();
};