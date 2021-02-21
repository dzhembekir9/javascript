function solution(a) {
    return function add(b) {
        return a + b;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));


let func = function (a, b) {
    return a * b;
}(5, 2);

console.log(func);