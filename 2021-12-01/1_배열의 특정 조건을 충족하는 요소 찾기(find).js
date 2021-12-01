/**
 * @section into 설명
 *                  - Array객체의 find메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환 하면서,
 *                   특정 조건은 만족하는 첫 번째 요소를 반환합니다. 확인하는 방식은 callback함수 내부에서 정의된 문장
 *                   들을 통해 테스트 하게 되는데, callback 함수의 반환값은 무조건 ture 아니면 false이어야 한다.
 */


<!-- 변수 arr에 배열 리터럴을 대입한다. 배열에는 객체형 요소들을 정의한다. -->
const arr = [
    {name: 'AA', age: 2},
    {name: 'BB', age: 5},
    {name: 'CC', age: 30},
    {name: 'DD', age: 3},
    {name: 'EE', age: 6}
];

/*arr배열의 find로 호출한 결과값을 myfriend 변수에 할당합니다. callback함수에 정의된 조건식은
  각 요소의 age 속성이 숫자 30과 일치하는지 확인한다. 즉, 내부 요소 중 age 속성이 30과 일치하는 첫 번째
  요소가  myfriend변수에 대입된다.*/
const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);




/*##########################################################################
# { name: 'CC', age: 30 }
# Process finished with exit code 0
############################################################################*/