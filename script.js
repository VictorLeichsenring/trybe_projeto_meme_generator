const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

function changeText() {
  memeText.innerText = textInput.value;
}

function uploadImage(event) {
  const file = event.target.files[0];
  if (file) {
    memeImage.src = URL.createObjectURL(file);
  }
}


textInput.addEventListener('input', changeText);
memeInsert.addEventListener('change', uploadImage);
