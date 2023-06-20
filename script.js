const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

function changeText() {
  memeText.innerText = textInput.value;
}

function uploadImage(event) {
  const file = event.target.files[0];
  if (file) {
    memeImage.src = URL.createObjectURL(file);
  }
}

function fireButton() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function waterButton() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
}

function earthButton() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
}

textInput.addEventListener('input', changeText);
memeInsert.addEventListener('change', uploadImage);
btnFire.addEventListener('click', fireButton);
btnWater.addEventListener('click', waterButton);
btnEarth.addEventListener('click', earthButton);
