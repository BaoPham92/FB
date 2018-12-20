window.onload = () => {
    clickRoll();
    cancelModal();
}

const helper = Object.freeze({
    cLog: (element) => {

        switch (element) {
            case element === timer: element === 'Timer';
            break;
            case element === freeRoll: element === 'Free Roll';
            break;
            case element === modal: element === 'Modal';
            break;
        }

        element ? console.log(`${element} detected.`) : console.log(`error detecting ${element}`);
    }
})

const clickRoll = () => {
    if (freeRoll && freeRoll.style.display === 'none') {
        return console.log('Unsuccessful');
    } else {
        freeRoll.click();
        return console.log('Successful!');
    }
}

const cancelModal = () => {
    modal ? modal.click() : console.log('Error attempting cancel modal.')
}

const timer = document.querySelector('#time_remaining');
const freeRoll = document.getElementById('free_play_form_button');
const modal = document.querySelector('.close-reveal-modal');

helper.cLog(timer);
helper.cLog(freeRoll);
helper.cLog(modal);