window.onload = () => {
    
    console.log(document.querySelector('#free_play_recaptcha'))
    document.querySelector('#free_play_recaptcha').remove();
    document.querySelector('.grecaptcha-badge').remove();

    for (const arry of document.getElementsByTagName('script')) {

        if (arry.src.includes('captcha')) {
            arry.remove();
        }
    }

    clickRoll();
    cancelModal();
    helper.loggedClicks();
}

const helper = Object.freeze({

    variables: {
        elementType: '',
        counter: 0
    },

    loggedClicks: () => {

        const logClicks = () => {
            const cMessage = localStorage.setItem('tInfo' + helper.variables.counter, 'Number of clicks recorded: ' + helper.variables.counter + ' on ' + Date(Date.now()).toString());
            return cMessage;
        };

        if (localStorage.length > 0) {
                helper.variables.counter <= localStorage.length ? helper.variables.counter + localStorage.length + 1 && logClicks() : console.log('Waiting for more rolls!');
        }

        for (var i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    },

    cLog: (element) => {

        switch (element) {
            case timer: helper.variables.elementType = 'Timer';
                break;
            case freeRoll: helper.variables.elementType = 'Free Roll';
                break;
            case modal: helper.variables.elementType = 'Modal';
                break;
        }

        element ? console.log(helper.variables.elementType, 'detected.') : console.log('error detected', helper.variables.elementType, element);
    }
})

const clickRoll = () => {
    if (freeRoll && freeRoll.style.display === 'none') {
        return console.log('Click for rolls currently unavailable.');
    } else {
        freeRoll.click();
        return console.log('Roll clicked!');
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