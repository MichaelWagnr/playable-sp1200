//Select each audiotag
const samples = document.querySelectorAll('audio');
//Select each svg sample pad
const keys = document.querySelectorAll('.key');

//Play sample
function handleNumberKey(event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`.key[data-key="${event.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}

//Remove played color
function removeTransition(event) {
    if (event.propertyName !== 'fill') return;
    this.classList.remove('playing');
}

//EventListener for keypad 1 - 8
window.addEventListener('keydown', handleNumberKey);
// EventListener for svg color transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
