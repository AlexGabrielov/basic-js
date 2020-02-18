module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    for (let e in arr) {
      if (Array.isArray(e)) {
        return  Math.max(this.calculateDepth(e), depth)
      } else return 0;
    }
    return depth
  }
}