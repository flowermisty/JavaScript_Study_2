/**
 * @brief : string 내장객체의 substr메소드는 인자로 시작 지점의 인덱스와 길이를 부여 받는다.
 *
 * @detail : 두번째 인자인 종료 인덱스는 선택 사항 이므로 필수 값이 아니며, 지정된 인덱스 부터
 *           시작해서 지정된 문자 수 또는 길이만큼의 새 문자열을 반환한다. 따라서 추출하고자 하는 문자열의
 *           길이를 정확히 알고 있는 경우 substr을 사용하는 것이 좋다.
 */


const sentence = 'Wakanda Forever!!!';

<!-- 두번째 인자 없이 첫번째 인자에만 인덱스를 입력한 경우로, 시작인덱스8부터 끝까지의 문자열을 반환 -->
console.log(sentence.substr(8));

<!-- 8번째 인덱스의 문자부터 뒤이어 7개의 문자들을 반환 -->
console.log(sentence.substr(8, 7));

<!-- 시작 인덱스0은 첫번째 문자로 처음부터 끝까지 문자열은 반환 -->
console.log(sentence.substr(0));

<!-- substr의 음수인자는 검색을 문자열의 뒤부터 위치를 결정한다. 따라서 뒤에서 10째 까지의 문자열을 반환한다. -->
console.log(sentence.substr(-10));

<!-- 함수의 두번째 인자에 음수를 넣으면 정상 동작하지 않는다. -->
console.log(sentence.substr(0, -3));

<!-- 문자열 길이보다 큰값을 넣으면 빈값을 반환한다. -->
console.log(sentence.substr(30));

<!-- 두번째 인자가 변수의 문자열 길이보다 크다면 이는 기존 문자열보다 큰 길이를 의미한다. -->
console.log(sentence.substr(0, 30));