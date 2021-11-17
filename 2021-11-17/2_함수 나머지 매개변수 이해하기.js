/*##########################################################################
# ES6에서 새로 추가된 나머지 매개변수에 대하여 알아본다.
# 특징 : 매개변수 정의시 정해지지 않은 매개변수들을 정의 할 수 있게 한다.
#       argument객쳉와 유사하나, argument객체는 함수에 전달되는 모든 전달인자를
#       포함하는 반면에, 나머지 매개변수는 정해지지 않은 나머지를 의미 합니다.
# 사용방법 : 나머지 매개변수는 argument객체와 다르게 매개변수를 작성하는 곳에서
#           작성하고, 다른 매개 변수와 차이첨을 두기 위해 ...연산자를 사용합니다.
############################################################################*/


function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
}

console.log(sum(1,2,3));

function  sum2(a, b, ...others){
    var total = a+ b;

    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4));


