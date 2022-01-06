function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const keys = document.querySelector(`.keys[id="${e.key}"]`);
    if(!audio) return; // stop the function, so it doesn´t play all audios together.
    audio.currentTime = 0; //rewind the audio to it´s start.
    audio.play();
    keys.classList.add('playing');//playing is an extra class defined in the css stylesheet.
};

function removeTransition(e) {
    //console.log(e);
    if(e.propertyName !== 'transform') return; //skip the transitions that are not called transform.
    this.classList.remove('playing');
};

document.addEventListener('keydown', playSound);

const eachKeys = document.querySelectorAll('.keys');
eachKeys.forEach(elem => elem.addEventListener('transitionend', removeTransition));