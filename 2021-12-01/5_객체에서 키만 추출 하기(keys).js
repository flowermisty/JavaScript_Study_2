/**
 * @section into 설명
 *                  - Object 객체의 메소드 Keys를 활용하면, 객체의 키들만 추출할 수 있다. 추출한 키들은 배열에 담아 반환된다.
 */


<!-- obj 변수에 객체 리터럴을 대입한다. obj객체에는 4개의 속성이 정의 되어있다. -->
const obj = {
    movie : 'sunny',
    music : 'like sugar',
    style : 'retro',
    price : Infinity
};

/* Object객체의 메소드 keys를 호출하고, 인자로 obj 변수를 넣습니다. keys는 obj변수에 정의된 속성 키 정보들만 추출한다.
추출된 값들은 새로운 배열에 담아 변수 arr에 대입한다.*/
const arr = Object.keys(obj);



<!-- 변수 arr을 콘솔 출력한다. -->
console.log(arr);

/*##########################################################################
# [ 'movie', 'music', 'style', 'price' ]
# Process finished with exit code 0
############################################################################*/

