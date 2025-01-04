const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  //Full or slice key depend on the length of message
  _complete(message, key) {
    let completeKey = key;

    if (message.length < key.length) {
      completeKey = key.slice(0, message.length);
    }

    if (message.length > key.length) {
      const ceil = Math.floor(message.length / key.length);
      const floor = message.length - key.length * ceil;
      completeKey = key.repeat(ceil).concat(key.slice(0, floor));
    }
    return completeKey;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperMessage = message.toUpperCase();
    const upperKey = this._complete(message, key).toUpperCase();

    let cipherMessage = '';
    let indexKey = 0;

    for (let i = 0; i < upperMessage.length; i += 1) {
      if (upperMessage[i] < 'A' || upperMessage[i] > 'Z') {
        cipherMessage += upperMessage[i];

      } else {
        let number = (upperMessage[i].charCodeAt(0) + upperKey[indexKey].charCodeAt(0)) % 26;
        number += 'A'.charCodeAt(0);
        cipherMessage += String.fromCharCode(number);

        indexKey += 1;
      }
    }

    if (this.direct) {
      return cipherMessage;
    }

    return cipherMessage.split('').reverse().join('');;
  }

  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperKey = this._complete(encryptedMessage, key).toUpperCase();
    let decipherMessage = '';
    let indexKey = 0;

    for (let i = 0; i < encryptedMessage.length; i += 1) {
      if (encryptedMessage[i] < 'A' || encryptedMessage[i] > 'Z') {
        decipherMessage += encryptedMessage[i];

      } else {
        let number = (encryptedMessage[i].charCodeAt(0) - upperKey[indexKey].charCodeAt(0) + 26) % 26;
        number += 'A'.charCodeAt(0);
        decipherMessage += String.fromCharCode(number);

        indexKey += 1;
      }
    }

    if (this.direct) {
      return decipherMessage;
    }

    return decipherMessage.split('').reverse().join('');;
  }
}

module.exports = {
  VigenereCipheringMachine
};
