export const buttonPressAudio = new Audio('./assets/button-press.wav');

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3');

export const florest = new Audio('./assets/floresta.wav'); 
florest.loop = true;

export const reing = new Audio('./assets/chuva.wav'); 
reing.loop = true;

export const coffee = new Audio('./assets/cafeteria.wav'); 
coffee.loop = true;

export const fire = new Audio('./assets/lareira.wav'); 
coffee.loop = true;

export function clearSounds() {
  florest.pause();
  reing.pause();
  coffee.pause();
  fire.pause();
}