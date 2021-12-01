/**
 * @section into 설명
 *                  - 배열의 요소를 일괄 변경해야 하는 경우, Array객체의 map 메소드를 활용한다.
 *                    callback함수를 인자로 받아, callback함수의 return으로 반환하는 값들을 재조합하여
 *                    새로운 배열에 만든다.
 */


<!-- 객체인 요소들을 가진 배열을 변수 arr에 선언합니다. -->
const arr = [
    {id: 0, name: 'AA', age : 6},
    {id: 1, name: 'BB', age : 3},
    {id: 2, name: 'CC', age : 5},
    {id: 3, name: 'DD', age : 2}
];





<!-- 각 요소의 age속성에 1을 더하여 다시 속성 age에 대입한다. -->
const arr2 = arr.map(el => {
    <!-- map 메소들를 통해 arr배열의 각 요소가 매개변수 el로 전달됩니다. -->
    el.age = el.age+1;
    return el;
});

/**
 * @explain 35line 설명
 *                  - map메소드는 callback 함수의 리턴값에 따라 반환되는 배열값이 바뀝니다.
 *                    22line에서는 속성만 변경하여 다시 객체를 반환했기 때문에 arr2 변수에는
 *                    객제 요소로 구성된 배열이 할당된다.
 *                    하지만 35line에서는 arr3변수에 문자열로 구성된 배로운 배열이 할당된다.
 */
const arr3 = arr.map(el => el.name);


console.log(arr2);
console.log(arr3);


/*##########################################################################
# [결과값]
# [
#   { id: 0, name: 'AA', age: 7 },
#   { id: 1, name: 'BB', age: 4 },
#   { id: 2, name: 'CC', age: 6 },
#   { id: 3, name: 'DD', age: 3 }
# ]
# [ 'AA', 'BB', 'CC', 'DD' ]
# Process finished with exit code 0
############################################################################*/