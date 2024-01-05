import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as elements from './elements.js';
import { updateDisplay} from "./timer.js";

export function registerControls() {
  controls.forEach(function(btn) {
    btn.addEventListener('click', (event) => {
      const action = event.target.dataset.action;
  
      if (typeof actions[action] != "function") {
        return;
      }
  
      actions[action]();
    });
  })
}

export function setMinutes() {
  elements.minutes.addEventListener('focus', () => {
    if (state.addFiveMinutes) {
      let time = Number(elements.minutes.textContent);
      time += 5;
      elements.minutes.textContent = String(time).padStart(2, "0");
      elements.minutes.removeAttribute('contenteditable');
      state.addFiveMinutes = !state.addFiveMinutes;

    } else if (state.removeFiveMinutes) {
      let time = Number(elements.minutes.textContent);
      time -= 5;
      elements.minutes.textContent = time;
      elements.minutes.textContent = String(time).padStart(2, "0");
      elements.minutes.removeAttribute('contenteditable');
      state.removeFiveMinutes = !state.removeFiveMinutes;

    } else {
      elements.minutes.textContent = "";
    }
  });

  elements.minutes.onkeypress = (event) => /\d/.test(event.key);

  elements.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time;
    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    elements.minutes.removeAttribute('contenteditable');
  });
}

export function addFiveMinutes() {

}