/**
 * @section into 설명
 *                  - indexOf와 달리 lastIndexOf메소드는 문자열의 뒤에서부터 일치여부를 확인 한다.
 */

<!-- 변수 str에 Carpe diem, seize the day 를 할당한다. -->
const str = 'Carpe diem, seize the day';

<!-- String객체의 lastIndexOf메소드는 문자열의 뒤에서부터 동일한 첫 번째 인덱스 값을 반환한다. -->
console.log(`"e" 는 ${str.lastIndexOf('e')} 번째 인덱스에 있습니다.`);

<!-- 대소문자를 구별하므로 0을 반환 -->
console.log(`대문자 "C" 는 ${str.lastIndexOf('C')} 번째 인덱스에 있습니다.`);

<!-- 소문자c는 없으므로 -1리턴 -->
console.log(`소문자 "c" 는 ${str.lastIndexOf('c')} 번째 인덱스에 있습니다.`);

<!-- 문자열 단위 반환도 가능 하므로 일치하는 가장 첫번째 인덱스를 반환한다. -->
console.log(`문자열 ", se" 는 ${str.lastIndexOf(', se')} 번째 인덱스에 있습니다.`);