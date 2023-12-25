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

  constructor(direction = true) {
    this.direct = direction;
  }

  encrypt(message, key) {
    return this._execute(message, key);
  }
  decrypt(encryptedMessage, key) {
    return this._execute(encryptedMessage, key, 'decrypt');
  }

  _execute(msg, key, mode = 'encrypt') {
    if (!msg || !key) throw new Error('Incorrect arguments!')

    const isEncrypt = mode === 'encrypt';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let indx = 0;

    msg = msg.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < msg.length; i++) {
      if (alphabet.includes(msg[i])) {
        const msgCharCode = msg.charCodeAt(i) - 'A'.charCodeAt(0);
        const keyCharCode = key.charCodeAt(indx % key.length) - 'A'.charCodeAt(0);
        indx++;

        const shiftCharCode = isEncrypt
          ? (msgCharCode + keyCharCode) % alphabet.length
          : (msgCharCode - keyCharCode + alphabet.length) % alphabet.length;

        result += String.fromCharCode(shiftCharCode + 'A'.charCodeAt(0));
      } else {
        result += msg[i];
      }
    }
    return this.direct
      ? result
      : result.split('').reverse().join('');
  }  
}

module.exports = {
  VigenereCipheringMachine
};
