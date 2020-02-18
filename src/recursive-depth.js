module.exports = class DepthCalculator {
  calculateDepth(arr) { 

        const innerDepths = arr.filter(Array.isArray).map(e => {
            const depth  = this.calculateDepth(e);
            return depth;
        })

        return innerDepths.length ? Math.max(...innerDepths) + 1 : 1;
    }
}