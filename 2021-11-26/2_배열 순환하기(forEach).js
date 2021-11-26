/**
 * @section into 설명
 *                  - Array내장 객체의 ForEach메소드는 배열 내부 요소를 순환 하며, 각 요소에 대해 callback함수를
 *                   실행한다.
 *
 * @example         - 배열.forEach(callback 함수);
 */



const arr = [
    {id: 0, name:'AA', age:6},
    {id: 0, name:'BB', age:3},
    {id: 0, name:'CC', age:5},
    {id: 0, name:'DD', age:2}

];


<!-- 배열 arr의 forEach를 호출한다. 배열의 내부 요소는 callback 함수의 변수 el로 전달된다 -->
arr.forEach((el) => {
    console.log(el.name);
});

/*##########################################################################
# AA
# BB
# CC
# DD
# Process finished with exit code 0
############################################################################*/