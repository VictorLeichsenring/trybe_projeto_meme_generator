const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function textChange() {
    memeText.innerText = textInput.value;
}

textInput.addEventListener('input', textChange);