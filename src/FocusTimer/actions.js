import state from './state.js';
import * as timer from './timer.js';
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function set() {
  elements.minutes.setAttribute('contenteditable', true );
  elements.minutes.focus();
}

export function addMinutes() {
  sounds.buttonPressAudio.play();
  state.addFiveMinutes = true;

  elements.minutes.setAttribute('contenteditable', true);
  elements.minutes.focus();
}

export function removeMinutes() {
  sounds.buttonPressAudio.play();
  state.removeFiveMinutes = true;

  elements.minutes.setAttribute('contenteditable', true);
  elements.minutes.focus();
  
}

export function toggleMusic() {
  sounds.clearSounds();
  document.querySelector('.rain').classList.remove('music')
  document.querySelector('.coffee').classList.remove('music')
  document.querySelector('.fire').classList.remove('music');
  state.isMute = elements.forest.classList.toggle('music');
  

  if (state.isMute) {
    sounds.florest.play();
    return;
  }

  sounds.florest.pause();
}

export function rain() {
  sounds.clearSounds();
  document.querySelector('.forest').classList.remove('music');
  document.querySelector('.coffee').classList.remove('music');
  document.querySelector('.fire').classList.remove('music');
  state.isMute = elements.rain.classList.toggle('music');

  
  if (state.isMute) {
    sounds.reing.play();
    return;
  }

  sounds.reing.pause();
}

export function coffee() {
  sounds.clearSounds();
  document.querySelector('.forest').classList.remove('music');
  document.querySelector('.rain').classList.remove('music');
  document.querySelector('.fire').classList.remove('music');
  state.isMute = elements.coffee.classList.toggle('music');

  
  if (state.isMute) {
    sounds.coffee.play();
    return;
  }

  sounds.coffee.pause();
}

export function fire() {
  sounds.clearSounds();
  document.querySelector('.forest').classList.remove('music');
  document.querySelector('.rain').classList.remove('music');
  document.querySelector('.coffee').classList.remove('music');
  state.isMute = elements.fire.classList.toggle('music');

  
  if (state.isMute) {
    sounds.fire.play();
    return;
  }

  sounds.fire.pause();
}




