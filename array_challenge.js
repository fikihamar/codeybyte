var vals = [1,1,1,-5];

function arraySum(arr) {
  if (!arr) {
    return false;
  } else {
    var sum = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }
    return sum;
  }
}
sum = arraySum(vals.sort(function(a, b) {
  return b - a;
}).slice(0, 6));

console.log(sum);
