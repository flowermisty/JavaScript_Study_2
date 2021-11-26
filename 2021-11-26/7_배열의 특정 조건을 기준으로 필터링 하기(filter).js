/**
 * @section into 설명
 *                  - Array객체의 메소드는 인자로 대입된 callback함수를 통해 배열 내부를 순환하면서, 요소
 *                    각각이 특정 조건을 만족하는지 확인 한다. 확인하는 방식은 callback함수 내부에 정의된 문장
 *                    들을 통해 테스트 하게 되는데, callback 함수의 반환값은 무조건 true 또는 false이어야 한다.
 *                    이중에서 true 결과 값을 만족하는 요소들을 다시 새로운 배열에 담아 반환한다.
 */

<!-- 변수 arr에 숫자 1~ 10까지를 할당한다. -->
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

<!-- filter메소드의 callback함수를 통해 arr의 각 내부요소가 변수 a에 할당된다. -->
const filteredTwo = arr.filter(a => {
    <!-- 현재 순환하고 있는 배열의 위치를 알려준다. -->
   console.log(`현재 위치의 값은 ${a} 입니다.`);

   <!-- 배열의 요소가 짝수인 경우 true 홀수이면 false return을 통해 조건식의 결과 값을 반환한다.-->
   return a % 2 == 0;
});

<!-- filter메소드는 callback함수의 결과 값이true를 만족하는 요소를 새로운 배열로 모아 반환한다.  -->
console.log(filteredTwo);

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);