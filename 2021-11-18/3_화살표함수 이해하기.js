/*##########################################################################
# ES6에서는 기존함수를 간결하게 표현할수 있고 기능이 개선된 화살표 함수가 추가되었다.
# 화살표 함수는 function키워들르 사용하지 않고 화살표 모양의 => 연산자를 이용하여 정의한다.
# [화살표 함수 정의 규칙]
# 매개변수가 하나일 경우 괄호 생략 가능
# 매개변수가 없거나 두개 이상일 경우 괄호 작성필
# 화살표 함수 코드블록을 지정하지 않고 한 문장으로 작성시 return문을 사용하지 않아도 됨
# 화살표 함수 코드블록을 지정했을 경우 반환 하고자 하는 값에 return문을 작성해야됨.
############################################################################*/

const double = x => x + x;
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1,2));

const printAguments = () => {
    console.log(arguments);
} //화살표 함수는 arguments객체가 만들어지지 않는다.

printAguments(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];

    }
    return total;
}
console.log(sum(1,2,3));

setTimeout(() => {
    console.log('화살표 함수');
},10);