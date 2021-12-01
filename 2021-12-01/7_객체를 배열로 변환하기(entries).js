/**
 * @section into 설명
 *                  - Object객체의 메소드 entries는 객체를 배열로 변경합니다. 이 때 객체 내부 요소도 {키 : 값} 을 [키,값]
 *                    배열로 반환한다.
 */


<!-- obj변수에 리터럴객체를 대입한다. -->
const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
};

/* modifiedObj 변수에 entries함수에 obj를 인자로 담은 return값을 대입한다.
이때 obj는 배열로 변환된 값을 리턴한다.*/
const modifiedObj = Object.entries(obj);


console.log(modifiedObj);


/*##########################################################################
# [결과값]
# [
#   [ 'movie', 'Sunny' ],
#   [ 'music', 'Like Sugar' ],
#   [ 'style', 'Retro' ],
#   [ 'price', Infinity ]
# ]
# Process finished with exit code 0
############################################################################*/