/**
 * @section into 설명
 *                  - Obj객체의 메소드 freeze는 단어 그대로 객체를 동결 한다. freeze메소드로 객체를 동결한 이후에는
 *                    다른 속성를 추가하거나 제거할 수 없다.
 */

<!-- 변수 obj에 빈객체를 할당한다. 나중에 freeze메소들를 실행한뒤 다시 obj 변수로 할당하기 때문에 변수는 let로 선언 -->
let obj = {};


<!-- 객체 obj에 키가 title, 값은 IDOL인 속성을 추가한다. freeze메소드를 실행하기 전에는 얼마든지 객첼를 수정할 수있다. -->
obj.title = 'IDOL';

<!-- freeze함수로 동결한 객체를 다시 obj에 할당한다. -->
obj = Object.freeze(obj);


/* 객체 obj의 내용을 수정해본다. 그러나 freeze를 실행한 뒤라서 객체가 변경되지 않는다. 이따는 'use strict'가 선언된
상태가 아니므로 에러는 발생하지 않는다. */
obj.title = 'Euphoria';


<!-- obj를 출력해본다. -->
console.log(obj);

<!-- 함수안에 use strict를 선언한다.  -->
const changeUntilNum = (obj, num) => {
    'use strict';
    <!-- while문으로 내부가 true인 경우에만 반복한다. 반복문 내부에서 에러가 발생하면 break한다. -->
    while(true){
        console.log(obj);

        /* 객체 obj의 age속성값이 num보다 큰지 확인한다. 확인 결과가 true이면 Object, freeze(obj)으로 객체를
        동결하고, obj로 재할당 한다.*/
        if (obj.age >= num) {
            obj= Object.freeze(obj);
        }
        <!-- obj의 age속성값에 1을 더해서 수정한다. use strict 선언히후에 객체 obj를 수정하게 되면 에러 발생 while문 종료. -->
        obj.age += 1;
    }
}

let profile = {name:'AA', age:25};
changeUntilNum(profile, 30);


/*##########################################################################
# { title: 'IDOL' }
# { name: 'AA', age: 25 }
# { name: 'AA', age: 26 }
# { name: 'AA', age: 27 }
# { name: 'AA', age: 28 }
# { name: 'AA', age: 29 }
# { name: 'AA', age: 30 }
# C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-12-01\8_객체 변경되지 않도록 하기(freeze).js:39
#         obj.age += 1;
#                 ^
# TypeError: Cannot assign to read only property 'age' of object '#<Object>'
#     at changeUntilNum (C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-12-01\8_객체 변경되지 않도록 하기(
# freeze).js:39:17)
############################################################################*/