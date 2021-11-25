

<!-- 배열값을 각각 prevList, currentList, nextList 이름의 변수로 선언-->
const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

<!-- Array내장 객체의 concat메소드를 활용하여 배열을 병합 -->
console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList,nextList));

/*인자에 직접 리터럴 값을 넣을 수도 있다. 단, concat함수를 호출하는 첫번째 리터럴이
배열 자료형이어야만 Array객체의 concat가 실행된다. 문자형의 concat함수와 착각하지 않도록 유의 한다.*/
console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기','javascript200'));