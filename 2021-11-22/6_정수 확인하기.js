/*##########################################################################
# Number 내장객체의 isInteger()메소드는 값이 정수인지 아닌지 확인한다. 수학적으로
# 정의된 정수에 대해서는 모두 true를 반환하고, 정수가 아닌 값은 false를 반환한다.
############################################################################*/


console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(-1)); //true
console.log(Number.isInteger(7777777777777777777777777)); //true
console.log(Number.isInteger(null)); //false
console.log(Number.isInteger(0/0)); //false
console.log(Number.isInteger('Infinity')); //false
console.log(Number.isInteger(true)); //false
console.log(Number.isInteger({})); //false