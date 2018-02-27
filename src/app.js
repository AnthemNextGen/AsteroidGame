import { audio, IsMusicEnabled as musicEnabled } from './music';
import { publicGame, privateBtn, gameScreen } from './game';

publicGame.addEventListener('click', function () {
    document.getElementById('codeDiv').style.display = ('none');
    handleSwitchScreen('game');
    gameScreen.style.display = 'block';
    audio.pause();
});

privateBtn.addEventListener('click', function () {
    document.getElementById('codeDiv').style.display = ('block');
    document.getElementById('codeInput').focus();
    document.getElementById('startPrompt').style.display = ('none');
});

startButton.addEventListener('click', function () {
    game_room = document.getElementById('codeInput').value;
    if (game_room) {
        handleSwitchScreen('game');
        gameScreen.style.display = 'block';
        audio.pause();
    }
});


window.addEventListener('keyup', function (event) {
    if (event.keyCode == 27 && currentState.currentScreen == 'game') {
        handleSwitchScreen('over');
        gameScreen.style.display = 'none';
        var game = new Game();
        game.run();
    }
})


function setState(targetState, updateObj) {
    return Object.assign({}, targetState, updateObj);
}

function setStateAndRender(targetState, updateObj) {
    updateApp(setState(targetState, updateObj));
}




//////////////////////// application

// setting up the initial state of the application
const appState = {
    currentScreen: 'splash',
    musicEnabled: false,
    soundFXEnabled: false,
    loading: true,
};

let currentState = appState;

function updateApp(newState) {
    const screenElements = document.getElementsByClassName('screen');
    for (let elem of screenElements) {
        if (!elem.classList.contains('hidden')) {
            elem.classList.add('hidden');
            musicEnabled == false;
        }
    }
    document.getElementsByClassName(newState.currentScreen)[0].classList.remove('hidden');
}

function switchScreen(targetScreen) {
    const newState = setState(appState, { currentScreen: targetScreen });
    currentState = newState;
    return newState;
}

function handleSwitchScreen(targetScreen) {
    setStateAndRender(switchScreen(targetScreen));
}
window.handleSwitchScreen = handleSwitchScreen

document.addEventListener('click', function(e){

    if(e.target && e.target.id=="endGame"){
        document.getElementById('modal-popup').style.display = 'block'
    }

});

document.addEventListener('click', function(e){
     if(e.target && e.target.id=="close"){
        document.getElementById('modal-popup').style.display = 'none'
    }

})

document.addEventListener('click', function(e){
     if(e.target && e.target.id=="playAgain"){
        handleSwitchScreen('splash')
        gameScreen.style.display = 'none';
        window.location.reload();
    }

})


updateApp(appState);
