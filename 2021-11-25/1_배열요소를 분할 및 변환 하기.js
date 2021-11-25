/**
 * @section into 설명
 *                  - Array 내장 객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할 합니다.
 *                   그리고 분할된 문자는 배열 소소 각각에 대입되어, 결과 값으로 배열을 반환 합니다.
 *                   첫번째 인자는 배열요소로 분할 변환될 문자열을 대입합니다. 두번째 인자는 필수 값은 아니지만,
 *                   callback함수를 대입하면, 분할함과 동시에 각 값을 변환 시킬수 있습니다.
 */


const str = "12345678";

/*##########################################################################
# 변수 arr을 Array.from에 대입하여 호출한다. 호출한 결과값은 distributeArr에 다시
# 할당한다. Array.from에 문자열을 대입하면 구분자 없이 문자열을 하나씩 쪼개서 배열을
# 반환한다. 12345678문자열이 분할되어, qoduf["1","2","3","4","5","6","7","8"]이
# distributeArr변수에 대입된다.
############################################################################*/
const distributeArr = Array.from(str);
console.log(distributeArr);

/*##########################################################################
# Array.from의 두번째 인자로 콜백 함수를 넣을수 있다. 이때에슨 분할된 배열값의 내부
# 요소들이 하나씩 callback함수로 전달된다. 전달된 요소들은 callback함수에 따라 처리되고,
# 처리된 이후 최종 결과 값으로 반환 된다.
############################################################################*/
const modifiedArr = Array.from(distributeArr, el => el * 2);
console.log(modifiedArr);



/*##########################################################################
# [실행결과]
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-25\1_배열 요소를 분할\변환하기(from).js"
# [
#  '1', '2', '3',
#  '4', '5', '6',
#  '7', '8'
# ]
# [
#   2,  4,  6,  8,
#  10, 12, 14, 16
# ]
# Process finished with exit code 0
############################################################################*/