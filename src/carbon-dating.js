const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(Number.parseFloat(sampleActivity))) return false;

  const numberActivity = parseFloat(sampleActivity);

  if (numberActivity <= 0 || numberActivity >= 15) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const res = Math.ceil(Math.log(MODERN_ACTIVITY / numberActivity) / k);
  return res;

};
