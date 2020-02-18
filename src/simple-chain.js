const chainMaker = {
  res: [],

  getLength() {
    return this.res.length;
  },

  addLink(value) {
    if (!arguments.length) {
      this.res.push('( )')
      return this
    } 
    if (value === null) {
      this.res.push('null')
      return this
    }
    this.res.push(value);
    return this;

  },

  removeLink(position) {
    if (!Number.isInteger(position) || position > this.res.length - 1 || position <= 0) {
      this.res = []
      throw new Error();

    }
    this.res = this.res.filter(e => this.res.indexOf(e) !== position - 1)
    return this;
  },

  reverseChain() {
    this.res.reverse()
    return this
  },

  finishChain() {
    const finalChain = '( ' + this.res.join(' )~~( ') + ' )'
    this.res = [];
    return finalChain;
  }
};

module.exports = chainMaker;
