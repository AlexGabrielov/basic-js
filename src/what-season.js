module.exports = function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (typeof date !== 'object' || date.hasOwnProperty('toString')) throw new Error();

  const res = date.getMonth()
  if (res === 0 || res === 1 || res === 11) return 'winter'
  if (res === 2 || res === 3 || res === 4) return 'spring'
  if (res === 5 || res === 6 || res === 7) return 'summer'
  if (res === 8 || res === 9 || res === 10) return 'autumn'
  
};
