/**
 * @section into 설명
 *                  - Array 객체의 메소드 indexOf는 대입된 값(첫번째 인자)을 내부에서 검색한다.
 *                    값이 일치 하는 경우 해당 인덱스를 반환 한다.
 *
 *                  - 두 번째 인자인 시작 인덱스는 필수 값은 아니다. 만일 두 번째 인자에 숫자형 값을 넣으면,
 *                    indexOf는 해당 인덱스부터 값을 찾는다. 만일 찾는 값이 없으면 indexOf는 숫자 -1을 반환한다.
 *
 *
 * @example         - 배열.indexOf(검색할 값, 시작 인덱스);
 */


const arr = ['spring', 'summer', 'fail', 'winter', 'is', 'down'];


<!-- arr배열 요소 중에서 winter문자열을 찾기 위해 indexOf메소드를 활용한다. 해당값은 arr 3인덱스의 위치에 있는것을 확인 -->
console.log(`"winter" is in this index ${arr.indexOf('winter')}`);

<!-- arr배열의 인덱스 4부터 winter 문자열을 겁색하면 값을 찾을 수 없기 때문에 -1을 반환한다. -->
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);



/*##########################################################################
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-26\1_배열의 특정요소 위치 확인하기(indexOf).js"
# "winter" is in this index 3
# "winter" is not in here, look this value -1
# Process finished with exit code 0
############################################################################*/