window.onload = () => {
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

// Test of auto betting with percentage tracker.
const wallet = document.querySelector('#balance').firstChild.nodeValue || document.querySelector('#balance2').firstChild.nodeValue;
console.log(wallet)

function callback(mutationList) {
    mutationList.forEach((mutation) => {
        console.log(mutation.target.textContent, (((mutation.target.textContent - wallet) / wallet) * 100).toFixed(2))
    });
    
    setInterval(() => {
        if (document.querySelector('#stop_auto_betting').style.display === 'none') {
            document.querySelector('#start_autobet').click()
            console.clear()
        }
    },
1000)
}

var targetNode = document.querySelector('#balance') || document.querySelector('#balance2');
var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);