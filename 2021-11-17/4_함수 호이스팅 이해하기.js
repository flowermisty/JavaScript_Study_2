/*##########################################################################
#  자바스크립트는 함수를 선언하기 전에 호출이 가능하다. 이러한 현상을 호이스팅
#  이라고 하는데, 호이스팅을 직역하면, 끌어올리기 이다. 함수가 호출하기 이전으로
#  끌어 올라간 것 처럼 동작하기 때문이다.
############################################################################*/

hello();
function hello (){
    console.log('안녕하세요');
}

console.log('=======================================================');

hello2();
var hello2 = function (){
    console.log('안녕하세요');
}
