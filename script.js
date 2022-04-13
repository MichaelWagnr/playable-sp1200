//Select each patch button
const patchButtons = document.querySelectorAll('button');
//Select each audiotag
const samples = document.querySelectorAll('audio');
//Select each svg sample pad
const keys = document.querySelectorAll('.key');

//Change selected patch
function handlePatchButtonClick(event) {
    let i = 0;
    const clickedButton = event.currentTarget;
    const clickedButtonId = clickedButton.id;
    const extension = '.wav';

    //Remove 'selected' class off each button
    patchButtons.forEach(button => { button.classList.remove('selected') });
    //Add 'selected' class on clicked button
    clickedButton.classList.add('selected');

    //Change src for each sample to "./id/id-index#.extension"
    samples.forEach(sample => {
        i = i + 1;
        sample.src = `./${clickedButtonId}/${clickedButtonId}-${i}${extension}`
    });
}

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

//EventListener for patch button clicks
patchButtons.forEach(button => { button.addEventListener('click', handlePatchButtonClick) });
//EventListener for keypad 1 - 8
window.addEventListener('keydown', handleNumberKey);
// EventListener for svg color transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// ============= Naming conventions =============
// example sample name: juno106-1.wav, juno106-2.wav, juno106-3 etc.
