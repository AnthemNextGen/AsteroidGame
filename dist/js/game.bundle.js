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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var privateBtn = exports.privateBtn = document.getElementById('privateButton');
var publicGame = exports.publicGame = document.getElementById('publicButton');
var gameScreen = exports.gameScreen = document.getElementById('gameCanvas');

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(24);

_game.publicGame.addEventListener('click', function () {
    handleSwitchScreen('game');
    _game.gameScreen.style.display = 'block';
});

_game.privateBtn.addEventListener('click', function () {
    game_room = prompt('Enter Private Game room name');
    if (game_room) {
        handleSwitchScreen('game');
        _game.gameScreen.style.display = 'block';
    }
});

window.addEventListener('keyup', function (event) {
    if (event.keyCode == 27 && currentState.currentScreen == 'game') {
        handleSwitchScreen('over');
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

updateApp(appState);

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map