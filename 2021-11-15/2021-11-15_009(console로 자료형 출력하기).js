//console은 자바스크립트의 내장 객체이다.
//console내부에는 여러 메소드들이 있으며,그중에 log메소드를 활용한 내용을 살펴본다.

var str = "javascript";
var num = 200;
var arr = [1,2,3,4,5];
var obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5
};

console.log(str);
console.log(num);
console.log(arr);
console.log(obj);



/*#################################################################
# 아래와 같이 디버그,에러,정보,경고 메소드를 사용할수 있는데
# 이 네가지 출력 메소드로 메시지의 레벨을 설정하면, 브라우저 웹콘솔에서
# 원하는 레벨의 메시지들만 필터링 검색하여 출력 결과를 볼수도 있고
# 서버로그를 파일도 저장할 수도 있는데, 이때에도 console 메소드를 활용하여
# 원하는 레벨 이상의 로그만 출력 하도록 설정 가능하다.
################################################################# */

console.debug(str);
console.error(str);
console.info(str);
console.warn(str);