const body = document.getElementById("mid");
const gura = document.getElementById("top");
const tapeta = document.body;

const reset = document.getElementById("reset");

const do_sth = document.getElementById("do-sth");
do_sth.counter = 1;
const audio = document.getElementById("myAudio");
const rnd = document.getElementById("rndAudio");

const overlay = document.getElementById("overlay");

const r_car = document.getElementById("r-car");
const b_car = document.getElementById("b-car");
const y_car = document.getElementById("y-car");

const cars = [r_car, b_car, y_car];

let is_start = false;
for (car of cars) {
  car.car_posicion = 0;
}
r_car.speed = 5;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restartTheGame() {
  is_start = false;
  for (car of cars) {
    car.car_posicion = 0;
    car.style.paddingTop = `${car.car_posicion}px`;
  }
  r_car.speed = 5;
  overlay.classList.add("hidden");
}

function randomColor() {
  const r = Math.floor(Math.random() * 256); // Składowa czerwona (0-255)
  const g = Math.floor(Math.random() * 256); // Składowa zielona (0-255)
  const b = Math.floor(Math.random() * 256); // Składowa niebieska (0-255)
  return `rgb(${r},${g},${b})`; // Zwróć kolor w formacie 'rgb(r,g,b)'
}

function playSound() {
  const x = getRandomInt(0, 31);
  rnd.src = `rndSounds/${x}.mp3`;
  rnd.play();
}

function stopSound() {
  audio.pause(); // Wstrzymaj odtwarzanie dźwięku
  audio.currentTime = 0; // Przewiń dźwięk na początek
}
function sthsthsth() {
  if (do_sth.counter % 10 == 0) {
    r_car.speed += 5;
    console.log(r_car.speed);
  }
  if (do_sth.counter % 15 == 0) {
    car_go_wrum_wrum_2(r_car);
    console.log("sdjbfuaksdbfkasbdf");
  }
  do_sth.counter += 1;
  if (do_sth.counter % 3 == getRandomInt(0, 2))
    tapeta.style.backgroundColor = randomColor();
  if (do_sth.counter % 3 == getRandomInt(0, 2))
    gura.style.backgroundColor = randomColor();
  if (do_sth.counter % 50 == getRandomInt(0, 50)) audio.play();
  if (do_sth.counter % 5 == getRandomInt(0, 5)) playSound();
}

function endGame(car) {
  if (car.car_posicion > car.offsetHeight * 0.8) {
    is_start = false;
    for (car of cars) {
      car.car_posicion = 0;
    }
    overlay.classList.remove("hidden");
  }
}

function car_go_wrum_wrum(car) {
  car.car_posicion += r_car.speed;
  car.style.paddingTop = `${car.car_posicion}px`;
  endGame(car);
  endGame(car);
}

function car_go_wrum_wrum_2(car) {
  if (is_start) {
    car.car_posicion += 5;
    car.style.paddingTop = `${car.car_posicion}px`;
    endGame(car);
    setTimeout(() => car_go_wrum_wrum_2(car), getRandomInt(100, 300));
  } else {
    return;
  }
}

function game_on() {
  if (!is_start) {
    is_start = true;
    car_go_wrum_wrum_2(y_car);
    car_go_wrum_wrum_2(b_car);
  }
  car_go_wrum_wrum(r_car);
}

body.addEventListener("click", game_on);
reset.addEventListener("click", restartTheGame);
do_sth.addEventListener("click", sthsthsth);
