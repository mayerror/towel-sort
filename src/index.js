// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    let arrResult = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i === 0 || i % 2 === 0) {
        arrResult = arrResult.concat(matrix[i].sort((a, b) => {
          return a - b;
        }));
      } else {
        arrResult = arrResult.concat(matrix[i].sort((a, b) => {
          return b - a;
        }));
      }
    }
    return arrResult;
}
