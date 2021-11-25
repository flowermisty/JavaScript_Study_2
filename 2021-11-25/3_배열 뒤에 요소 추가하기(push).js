/**
 * @section into 설명
 *                  - 자바스크립트 배열 자료형은 Linked List 자료구조 형태를 가지고 있다.
 *                    따라서 배열 앞과 뒤에서 요소를 추가하는 것이 가능하다. Array내장 객체 메소드 Push는 배열 뒤에서
 *                    요소를 추가 한다.
 */


<!-- festa배열을 선언하고 요소로 mang를 추가한다. -->
const festa = ['mang'];

<!-- 문장의 순서대로 push메소드를 사용하여 배열 뒤에 요소를 추가한다. -->
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');


<!-- 반복문을  사용하여 각요소에 순서대로 접근하여 요소의 내용을 출력한다. -->
festa.forEach(name => {
   console.log(name);
});



/*##########################################################################
# [결과 확인]
# mang
# chimmy
# tata
# cooky
# shooky
# koya
# rj
Process finished with exit code 0
############################################################################*/