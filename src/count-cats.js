module.exports = function countCats(matrix) {
  let res = 0;
  res = matrix.flat().map(e => e === '^^' ? 1 : 0 ).reduce((acc, value) => acc + value, 0)
  return res;

  
};
