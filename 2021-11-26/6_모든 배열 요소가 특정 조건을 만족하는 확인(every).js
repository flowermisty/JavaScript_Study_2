/**
 * @section into 설명
 *                  - Array객체의 every메소드는 배열의 모든 요소가 callback함수 조건을 만족하는 확인한다.
 *                    따라서 callback함수 조건이 한번이라도 false인경우, false 반환과 함께 실행이 종료 된다.
 *                    모든 조건 결과가 true일 때에만 every메소드는 true를 반환합니다.
 */


const arr =[
    {id:0, name:'AA', age:6},
    {id:1, name:'BB', age:3},
    {id:2, name:'CC', age:5},
    {id:3, name:'DD', age:2}
];

<!-- 배열의 3번째 요소에만 CC가 있으므로 false를 리턴 한다. -->
const isAllCC = arr.every(el => el.name == "CC");

<!-- 배열의 age요소가 7보다 작았 으므로 true를 리턴한다.-->
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllCC);
console.log(youngerThanSevenAll);



/*##########################################################################
# 실행결과
# false
# true
# Process finished with exit code 0
############################################################################*/


