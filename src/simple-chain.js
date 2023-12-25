const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    value === undefined
      ? this.chains.push('')
      : this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
      || position < 1
      || position % 1 > 0
      || position > this.chains.length
    ) {
      this.resetChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.join('~~');
    this.resetChain();
    return result;
  },
  resetChain() {
    this.chains = [];
  },
};

module.exports = {
  chainMaker
};
