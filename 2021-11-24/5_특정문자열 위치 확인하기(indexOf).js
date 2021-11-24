/**
 * @section into 설명
 *                  - String 내장객체의 매소드 indexOf를 활용하면 문자열에서
 *                   특정 문자열이 있는지 확인 할 수 있다.
 */


<!-- 변수 str에 문자열 'Carpe diem, seize the day' 대입 -->
const str = 'Carpe diem, seize the day';

<!-- indexOf는 특정 문자열과 일치하는 첫 번째 인덱스를 찾아 값을 반환한다. -->
console.log(`"e" 는 ${str.indexOf('e')} 번째 인덱스에 있습니다.`);

<!-- indexOf는 대소문자를 구별하므로 대문자 C는 첫번째 인덱스를 반환한다. -->
console.log(`대문자 "C" 는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`);

<!-- 소문자 c와는 일지차는 문자가 없으므로 -1을 리턴한다. -->
console.log(`소문자 "c" 는 ${str.indexOf('c')} 번째 인덱스에 있습니다.`);

<!-- 단일문자 뿐만 아니라 문자열 단위로도 일치여부를 확인 한다. 이때로 일치하는 가장 첫 번째 인덱스를 반환한다. -->
console.log(`문자열 ", se" 는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`);


<!-- 문자열을 요소로 갖는 배열변수를 선언한다. -->
const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];


<!-- 함수 howManyHasE에 배열변수를 대입하여 반환값을 출력한다. -->
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) count++;
    });
    return count;
}

console.log(`${arr} 에 "e" 가 있는 요소는 모두 ${howManyHasE(arr)} 개 입니다.`);