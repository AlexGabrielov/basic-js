module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      res.push(arr[i + 1])
      continue
    }
    if (arr[i] === '--double-prev') {
      res.push(arr[i - 1])
      continue
    }
    if (arr[i] === '--discard-next') {
      i++
      continue
    }
    if (arr[i] === '--discard-prev') {
      res = res.slice(0, res.length - 1)
      continue
    }
    res.push(arr[i])

  }

  return res.filter(e => e !== undefined)
}