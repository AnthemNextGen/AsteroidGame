/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var privateBtn = exports.privateBtn = document.getElementById('privateButton');
var publicGame = exports.publicGame = document.getElementById('publicButton');
var gameScreen = exports.gameScreen = document.getElementById('gameCanvas');
var playAgain = exports.playAgain = document.getElementById('playAgain');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.musicControl = musicControl;
var audioUrl = exports.audioUrl = "./assets/Videogame2.wav";
var audio = exports.audio = document.createElement('audio');
audio.src = audioUrl;
var button = exports.button = document.getElementById('play');
var IsMusicEnabled = exports.IsMusicEnabled = false;
var soundPauseIcon = '<img src="./assets/pauseVolumeIcon.png"height="40" width="40" />';
var soundPlayIcon = '<img src="./assets/playVolumeIcon.png" height="40" width="40" />';

function musicControl(audioUrl) {
  if (audioUrl && audio.paused) {
    audio.play();
    audio.loop = true;
    exports.IsMusicEnabled = IsMusicEnabled = true;
    return true;
  } else if (audioUrl && audio.play) {
    audio.pause();
    exports.IsMusicEnabled = IsMusicEnabled = false;
    return true;
  }
}

button.addEventListener('click', function (event) {
  if (IsMusicEnabled == true) {
    musicControl(audioUrl);
    button.innerHTML = soundPauseIcon;
  } else if (IsMusicEnabled == false) {
    musicControl(audioUrl);
    button.innerHTML = soundPlayIcon;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _music = __webpack_require__(1);

var _game = __webpack_require__(0);

_game.publicGame.addEventListener('click', function () {
    document.getElementById('codeDiv').style.display = 'none';
    handleSwitchScreen('game');
    _game.gameScreen.style.display = 'block';
    _music.audio.pause();
});

_game.privateBtn.addEventListener('click', function () {
    document.getElementById('codeDiv').style.display = 'block';
    document.getElementById('codeInput').focus();
    document.getElementById('startPrompt').style.display = 'none';
});

startButton.addEventListener('click', function () {
    game_room = document.getElementById('codeInput').value;
    if (game_room) {
        handleSwitchScreen('game');
        _game.gameScreen.style.display = 'block';
        _music.audio.pause();
    }
});

window.addEventListener('keyup', function (event) {
    if (event.keyCode == 27 && currentState.currentScreen == 'game') {
        handleSwitchScreen('over');
        _game.gameScreen.style.display = 'none';
        var game = new Game();
        game.run();
    }
});

function setState(targetState, updateObj) {
    return Object.assign({}, targetState, updateObj);
}

function setStateAndRender(targetState, updateObj) {
    updateApp(setState(targetState, updateObj));
}

//////////////////////// application

// setting up the initial state of the application
var appState = {
    currentScreen: 'splash',
    musicEnabled: false,
    soundFXEnabled: false,
    loading: true
};

var currentState = appState;

function updateApp(newState) {
    var screenElements = document.getElementsByClassName('screen');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = screenElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            if (!elem.classList.contains('hidden')) {
                elem.classList.add('hidden');
                _music.IsMusicEnabled == false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    document.getElementsByClassName(newState.currentScreen)[0].classList.remove('hidden');
}

function switchScreen(targetScreen) {
    var newState = setState(appState, { currentScreen: targetScreen });
    currentState = newState;
    return newState;
}

function handleSwitchScreen(targetScreen) {
    setStateAndRender(switchScreen(targetScreen));
}
window.handleSwitchScreen = handleSwitchScreen;

document.addEventListener('click', function (e) {

    if (e.target && e.target.id == "endGame") {
        document.getElementById('modal-popup').style.display = 'block';
    }
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == "close") {
        document.getElementById('modal-popup').style.display = 'none';
    }
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == "playAgain") {
        // handleSwitchScreen('splash')
        // gameScreen.style.display = 'none';

        window.location.reload();
    }
});

updateApp(appState);

/***/ })
/******/ ]);
//# sourceMappingURL=game.bundle.js.map