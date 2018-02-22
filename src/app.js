import {publicGame, privateBtn, gameScreen} from './game';
//import {musicControl, audioUrl} from './music';

publicGame.addEventListener('click', function(){
    handleSwitchScreen('game');
    gameScreen.style.display = 'block';
});


privateBtn.addEventListener('click', function(){
    const room = prompt('Enter Private Game room name');
    if(room){
      handleSwitchScreen('game');
      gameScreen.style.display = 'block';

    }
});


window.addEventListener('keyup', function(event){
    if (event.keyCode == 27 && currentState.currentScreen == 'game') {
        handleSwitchScreen('over');
    }
})


function setState(targetState, updateObj){
    return Object.assign({}, targetState, updateObj);
}

function setStateAndRender(targetState, updateObj){
    updateApp(setState(targetState, updateObj));
}




//////////////////////// application

// setting up the initial state of the application
const appState = {
    currentScreen : 'splash',
  musicEnabled : false,
  soundFXEnabled : false,
  loading : true,
};

let currentState = appState;

function updateApp(newState){
  const screenElements = document.getElementsByClassName('screen');
  for (let elem of screenElements){
    if (!elem.classList.contains('hidden')) {
        elem.classList.add('hidden');
        musicEnabled == false;
    }
  }
    document.getElementsByClassName(newState.currentScreen)[0].classList.remove('hidden');
}

function switchScreen(targetScreen) {
    const newState = setState(appState, {currentScreen : targetScreen});
    currentState = newState;
    return newState;
}

function handleSwitchScreen(targetScreen){
    setStateAndRender(switchScreen(targetScreen));
}

updateApp(appState);

//alert(currentState);
