var PermutationStep = function (num) {
    var newNum = num.toString().split("");
    for (var i = (newNum.length - 1); i >= 0; i--) {
        if (Number(newNum[i]) > Number(newNum[i - 1])) {
            newNum.splice(i - 1, 2, newNum[i], newNum[i - 1]);
            var firstHalf = newNum.slice(0, i);
            var secondHalf = newNum.slice(i);
            break;
        }
        else {
            return -1;
        }

    }

    var sorted = secondHalf.sort(function (a, b) { return Number(a) - Number(b) });
    return firstHalf.concat(sorted).join("");

};