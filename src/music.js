export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const button = document.getElementById('play');
var musicEnabled = false;
var soundPauseIcon = '<img src="./assets/pauseVolumeIcon.png"height="40" width="40" />';
var soundPlayIcon = '<img src="./assets/playVolumeIcon.png" height="40" width="40" />';

export function musicControl(audioUrl) {
  if (audioUrl && audio.paused) {
    audio.play(),
      audio.loop = true,
      musicEnabled = true;
    return true;
  } else if (audioUrl && audio.play) {
    audio.pause(),
      musicEnabled = false;
    return true;
  }
}

button.addEventListener('mousedown', (event) => {
  if (musicEnabled == true) {
    musicControl(audioUrl);
    button.innerHTML = soundPauseIcon;
  } else if (musicEnabled == false) {
    musicControl(audioUrl);
    button.innerHTML = soundPlayIcon;
  }
})




