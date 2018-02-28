module.exports = function solveEquation(equation) {
  // your implementation
    var arr = equation.split('*')
      .map((item) => {
            const arr = item.trim().split(' ')
            const length = arr.length;

            return (length === 1) ? arr[0] : arr[length - 2] + arr[length - 1]
        })
      .map(item => Number(item));

    var [a, b, c] = arr;

    var d = Math.round(Math.sqrt(Math.pow(b, 2) - 4 * a * c));

    var x1 = (-b + d) / (2 * a);
    var x2 = (-b - d) / (2 * a);

    return [x1, x2].sort((a, b) => a - b)
}
