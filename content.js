window.onload = () => {
    clickRoll();
}

const clickRoll = () => {
    if (freeRoll && freeRoll.style.display === 'none') {
        return console.log(true, 'btn is not displaying.');
    } else {
        return console.log(false, 'btn is displaying.');
    }
}

// const timer = document.querySelector('#time_remaining');
// console.log(timer);

const freeRoll = document.getElementById('free_play_form_button');
console.log(freeRoll);
