window.onload = () => {
    clickRoll();
    cancelModal();
}

const clickRoll = () => {
    if (freeRoll && freeRoll.style.display === 'none') {
        return console.log(true, 'Unsuccessful');
    } else {
        freeRoll.click();
        return console.log(false, 'Successful!');
    }
}

const cancelModal = () => {
    modal ? modal.click() : console.log('Error attempting cancel modal.')
}

const timer = document.querySelector('#time_remaining');
console.log(timer);

const freeRoll = document.getElementById('free_play_form_button');
console.log(freeRoll);

const modal = document.querySelector('.close-reveal-modal');
console.log(modal);