window.onload = () => {
    clickRoll();
    cancelModal();
}

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

const timer = document.querySelector('#time_remaining')
const freeRoll = document.getElementById('free_play_form_button')
const modal = document.querySelector('.close-reveal-modal')

// Below is my experiment on finding data and logic for them. Will clean clutter and organize as a todo.

let buttonsRP = document.getElementsByClassName('reward_link_redeem_button_style ')
let rpBalance = document.querySelector('.user_reward_points').textContent;

for (const index of buttonsRP) {
    const targets = [
        'RedeemRPProduct(\'free_lott_100\')',
        'RedeemRPProduct(\'free_points_100\')']

    const match = targets.map(t => index.getAttribute('onclick').toLocaleLowerCase().includes((t).toLocaleLowerCase()))
    // console.log(match)

    if (match) {
        index.click()
    }
}

// Test of auto betting with percentage tracker.
const wallet = document.querySelector('#balance').firstChild.nodeValue || document.querySelector('#balance2').firstChild.nodeValue;
console.log(wallet)

function callback(mutationList) {
    mutationList.forEach((mutation) => {
        console.log(mutation.target.textContent, (((mutation.target.textContent - wallet) / wallet) * 100).toFixed(2))
    });
}

var targetNode = document.querySelector('#balance') || document.querySelector('#balance2'),
    targetNode2 = document.querySelector("#bonus_span_free_points") || document.querySelector("#bonus_span_free_lott") || document.querySelector("#bonus_span_fp_bonus")
var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);