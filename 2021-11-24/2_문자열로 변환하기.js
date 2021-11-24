/**
 * @brief : 자바스크립트의 모든 객제는 Object를 상속받기 때문에, 다른 모든 객체는 Prototype을 통해
 *          Object의 내장 메소드 toString()에 접근하고 재정의(Override)합니다. 이는 Object객체의
 *          toString()을 상속 받은 것과 다릅니다.
 */

<!-- 숫자, 불린, 문자, 배열, 객체 자료형의 값을 각각 변수로 대입한다. -->
const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a: 15};

<!-- 선언한 변수의 toString()을 호출하여 console.log로 값을 출력 합니다. -->
console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

/**
 * @brief
 * 변수 중에서 num 변수의 __proto__를 통해 toString 메소드를 직접 재정의 한다.
 * 새로 정의한 함수는 고정된 문자열 'toString 덮어쓰기'를 반환 한다. 여기서 호출된
 * toString()메소드는  재정의 한 toString이 호출되며 console.log로 출력한다.
 *
 */

num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
};
console.log(num.toString());


/*##########################################################################
#                               [출력결과]
# 5
# true
# 문자열 값
# 1,2,3
# [Object Object]
# toString 덮어쓰기
############################################################################*/