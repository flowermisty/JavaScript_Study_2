/*##########################################################################
# 자바스크립트는 매개변수와 전달인자의 수가 달라도 에러가 발생하지 않는다.
# argument객체는 배열과 유사하게 인덱스를 통해 접근 할 수 있지만 배열은 아니다.
# length속성외에 어떠한 속성과 메도드도 가지고 있지 않다
############################################################################*/

function sum(){
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3);

function testArg(){
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a', 'b');