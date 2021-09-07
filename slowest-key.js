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

  let key = keysPressed[0];
  let duration = releaseTimes[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    curDuration = releaseTimes[i] - releaseTimes[i - 1];
    if (
      curDuration > duration ||
      (curDuration == duration && keysPressed[i] > key)
    ) {
      key = keysPressed[i];
      duration = curDuration;
    }
  }
};

slowestKey([9, 29, 49, 50], "cbcd");
// slowestKey([12,23,36,46,62], "spuda");
