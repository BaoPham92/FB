window.onload = () => {

  let rewardBtn = document.querySelector("a.rewards_link")
  rewardBtn.click()

  // const timer = document.querySelector("#time_remaining");
  const freeRoll = document.getElementById("free_play_form_button");
  const modal = document.querySelector(".close-reveal-modal");

  // Click Free roll.
  const clickRoll = () => {
    if (freeRoll && freeRoll.style.display === "none") {
      return console.log("Click for rolls currently unavailable.");
    } else {
      freeRoll.click();
      return console.log("Roll clicked!");
    }
  };

  const cancelModal = () => {
    modal ? modal.click() : console.log("Error attempting cancel modal.");
  };

  // * INVOKE
  clickRoll();
  cancelModal();

  // * ELEMENTS
  let buttonsRP = document.getElementsByClassName("reward_link_redeem_button_style");
  let pointsBanner = !!document.querySelector('#bonus_container_free_points');
  let lottoBanner = !!document.querySelector('#bonus_container_free_lott');
  let bonusBanner = !!document.querySelector('#bonus_container_fp_bonus');
  let newArr;

  // * TIMEOUT FOR RETURNING CORRECT DATA
  window.setTimeout(() => {
    newArr = Array.from(buttonsRP) || [...buttonsRP]
    console.log(pointsBanner, lottoBanner)
    console.log(newArr)
    checkRewards()
  }, 2000)

  // ? Products
  // `RedeemRPProduct('free_points_100')` - RP Boost
  // `RedeemRPProduct('free_lott_100')` - Tickets Boost
  // `RedeemRPProduct('fp_bonus_1000')` - BTC Boost
  // let rpBalance = document.querySelector(".user_reward_points").textContent;

  const checkRewards = () => {
    // * TARGETS
    const targets = [
      `RedeemRPProduct('free_points_100')`,
      `RedeemRPProduct('free_lott_100')`
    ];
    let targetResults = [];

    // * POPULATE ARRAY PLACEHOLDER WITH BUTTONS
    targets.forEach(t => {
      newArr.forEach(index => {
        return index.getAttribute("onclick").toLocaleLowerCase().includes(t.toLocaleLowerCase()) === true && targetResults.push(index)
      });
    });

    // ! CONFIRM DATA
    console.log(targetResults)

    // TODO: CREATE A DYNAMIC SOLUTION FOR CHOOSING SPECIFIC TARGET SEQUENCE
    if (targetResults.length > 0) {
      // * IF ARRAY IS NOT EMPTY, LOOP AND CLICK BUTTONS
      targetResults.forEach(item => {
        const value = item.attributes[1].value;

        if (pointsBanner === false && value === `RedeemRPProduct('free_points_100')`) {
          item.click()
        }

        if (lottoBanner === false && value === `RedeemRPProduct('free_lott_100')`) {
          item.click()
        }

        // ! CURRENTLY NOT SELECTING / CLICKING BONUS REWARDS BELOW
        // if (bonusBanner === false && value === `RedeemRPProduct('fp_bonus_1000')`) {
        //   item.click()
        // }
        
      })
    }
  }

  // Test of auto betting with percentage tracker.
  const wallet =
    document.querySelector("#balance").firstChild.nodeValue ||
    document.querySelector("#balance2").firstChild.nodeValue;
  // console.log(wallet)

  function callback(mutationList) {
    mutationList.forEach(mutation => {
      console.log(`Current BTC: ` + mutation.target.textContent);
      console.log(
        (((mutation.target.textContent - wallet) / wallet) * 100).toFixed(2) +
        `% Gained from ${wallet}.`
      );
    });
  }

  var targetNode =
    document.querySelector("#balance") || document.querySelector("#balance2"),
    targetNode2 =
      document.querySelector("#bonus_span_free_points") ||
      document.querySelector("#bonus_span_free_lott") ||
      document.querySelector("#bonus_span_fp_bonus");
  var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
  };

  var observer = new MutationObserver(callback);
  observer.observe(targetNode, observerOptions);
};
