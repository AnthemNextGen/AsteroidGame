import { gameScreen } from './game';
export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const button = document.getElementById('play');
export var IsMusicEnabled = false;
var soundPauseIcon = '<img src="./assets/pauseVolumeIcon.png"height="40" width="40" />';
var soundPlayIcon = '<img src="./assets/playVolumeIcon.png" height="40" width="40" />';

// if(gameScreen == 'game'){
//   audio.pause();
// }

export function musicControl(audioUrl) {
  if (audioUrl && audio.paused) {
    audio.play(),
      audio.loop = true,
      IsMusicEnabled = true;
    return true;
  } else if (audioUrl && audio.play) {
    audio.pause(),
      IsMusicEnabled = false;
    return true;
  }
}

button.addEventListener('mousedown', (event) => {
  if (IsMusicEnabled == true) {
    musicControl(audioUrl);
    button.innerHTML = soundPauseIcon;
  } else if (IsMusicEnabled == false) {
    musicControl(audioUrl);
    button.innerHTML = soundPlayIcon;
  }
})




