const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (validate(sampleActivity)) {

    const activity = Number(sampleActivity);

    const reaction = Math.LN2 / HALF_LIFE_PERIOD;

    const year = Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / reaction);

    return year;
  }

  return false;
}

function validate(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') {
    return false;
  }

  if ((Number(sampleActivity) < 0 || Number(sampleActivity) > MODERN_ACTIVITY)) {
    return false;
  }

  if (!sampleActivity || !Number(sampleActivity)) {
    return false;
  }

  return true;
}

module.exports = {
  dateSample
};
