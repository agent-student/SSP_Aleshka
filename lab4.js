/* multiplication */

function mult(a, b) {
    return a * b;
}

function fun(a) {
    var digit = 2;
    return function(b) {
        digit = mult(digit, b);
        return digit;
    }
}


/* fibonacci */

function fib(x) {
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for (var i = 2; i < x; i++) 
        arr[i] = arr[i - 2] + arr[i - 1]; 
    return function(m) {
    return arr[m];
};
}