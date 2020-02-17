module.exports = function createDreamTeam(members) {
  if (!members || !members.flat) return false
  const res = members.map(e => typeof e === 'string' ? e.trim().toUpperCase()[0] : '').sort().join('')
  return res;
};