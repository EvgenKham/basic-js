const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  let {repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|'} = options;

  String(addition);
  String(str);

  result = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  result = str + result;

  result = (result + separator).repeat(repeatTimes - 1) + result;

  return result;
}

module.exports = {
  repeater
};
