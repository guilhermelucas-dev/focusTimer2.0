let lightMode = true;

const buttonToggle = document.getElementById('theme-toggle');

buttonToggle.addEventListener('click', event => {
  document.documentElement.classList.toggle('light');

  const mode = lightMode ? 'dark' : 'light';
  event.currentTarget.querySelector('span').textContent = `tema ${mode} ativado`;

  lightMode = !lightMode;
});