function navSlide() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('cross');
    burger.classList.toggle('fixed');
    html.classList.toggle('active');
    body.classList.toggle('active');
  });
}

navSlide();

const htmlDate = document.querySelector('#date');
const date = new Date();
var options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

htmlDate.textContent = date.toLocaleString('fr-FR', options);

const test = params => {
  const temperature = document.querySelector('#temp');
  const weatherLogo = document.querySelector('#weatherLogo');
  weatherLogo.src = `http://openweathermap.org/img/wn/${params.weather[0].icon}.png`;
  temperature.textContent = Math.round(params.main.temp);
  console.log(params);
};
fetch(
  'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=3e920baf81f18275d778d9ee4590dc5e&lang=fr&units=metric'
)
  .then(response => response.json())
  .then(response => test(response));
