/**
 * @section into 설명
 *                  - Object객체의 메소드 values를 활용하면, 객체의 속성값(value)만 추출할 수 있다. 추출된 속성값들은
 *                  배열에 담아 반환 된다.
 */

<!-- 객체리터럴을 obj변수에 담는다. -->
const obj ={
    movie : 'sunny',
    music : 'like sugar',
    style : 'retro',
    price : Infinity
};

<!-- 객체의 값만을 뽑아 arr에 배열로 저장한다. -->
const arr = Object.values(obj);


console.log(arr);


/*###########################################################################
# [ 'sunny', 'like sugar', 'retro', Infinity ]
# Process finished with exit code 0
############################################################################*/

