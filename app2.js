function removeTransition(sound) {
    if (sound.propertyName !== 'transform') return;
    sound.target.classList.remove('playing')
}


function playSound(sound) {
    const keys = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    if (!audio) return;

    keys.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);
