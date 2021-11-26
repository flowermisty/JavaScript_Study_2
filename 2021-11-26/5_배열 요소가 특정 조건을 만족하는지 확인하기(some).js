/**
 * @section into 설명
 *                  - Array객체의 some메소드는 callback함수의 return값이 true를 반환 할 때까지만 배열 요소를
 *                    순환한다. true를 반환하는 요소의 다음 요소들에 대해서는 더이상 처리하지 않는다. 만일
 *                    마지막 요소까지 순환해도 true를 끝내 반환하지 않으면 false를 반환한다.
 */



const arr = [
    {id: 0, name:'AA', age:6},
    {id: 0, name:'BB', age:3},
    {id: 0, name:'CC', age:5},
    {id: 0, name:'DD', age:2}
];

<!-- 객체 요소 중에서 name속성 값이 CC인지 확인한다. arr배열의 3번째 요소까지 순환하면 해당 문자열을 확인 할 수 있다. -->
const isCChere = arr.some(el => el.name == 'CC');

<!-- 배열의 마지막 까지 순환 해도 6보다 큰값이 없다. 따라서 false를 반환하게 되고 함수가 종료 된다. -->
const olderThanSix = arr.some(el => el.age > 6);


console.log(isCChere);
console.log(olderThanSix);


/*##########################################################################
# 실행결과
# true
# false
# Process finished with exit code 0
############################################################################*/