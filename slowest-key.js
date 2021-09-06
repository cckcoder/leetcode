/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 * Ref: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/636/week-1-september-1st-september-7th/3965/
 */

let slowestKey = function (releaseTimes, keysPressed) {
  if (releaseTimes.length <= 1 && keysPressed.length <= 1) {
    console.log(keysPressed);
    return;
  }

  let duration = 0;
  let slowKey = "";
  let deductVal = "";
  let maxValue = {}

  for (let i = 0; i < releaseTimes.length; i++) {
    //console.log(keysPressed[i])
    if (i === 0) {
      duration = releaseTimes[i];
    } else {
      deductVal = releaseTimes[i] - releaseTimes[i - 1];
      if (deductVal > duration) {
        duration = deductVal;
        maxValue[i] = { 'value': duration }
      }
    }
  }

};

//slowestKey([9, 29, 49, 50], "cbcd");
slowestKey([12,23,36,46,62], "spuda");
