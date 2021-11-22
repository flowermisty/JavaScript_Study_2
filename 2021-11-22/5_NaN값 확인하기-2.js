/*##########################################################################
# isNaN메소드를 활용하면, 다음과 같은 처리를 할 수 있다. 함수 vertifyNumber를 통해
# NaN여부를 검증하여 모든 값이 정상 숫자임을 확인한 후 안전하게 산술 연산한다.
# 함수에 대입된 값이 빈값이거나 NaN이면 산술처리 불가한 값으로 인식한다.
# 이때 산술연산에서 에러가 발생하지 않도록, 0을 리턴하면 함수를 빠져나온다.
############################################################################*/

function verifyNumber(n) {
 if (!n || Number.isNaN(n)) return 0;
 return n; 
}
const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);