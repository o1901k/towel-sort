
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return []
  }
  return  matrix.reduce((accumulator, currentValue, index) => {
  return accumulator.concat((!(index % 2) ? currentValue : currentValue.reverse()));
}, [])
}
