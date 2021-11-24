/**
 * @brief : String 내장객체 메소드 중에서 문자열을 합치는 concat을 알아본다.
 *
 */


<!-- 문자열이 대입된 변수 str1, 2, 3, 4를 선언한다.-->
const str1 = 'Good afternoon';

<!-- concat 메소드로 위 변수들을 하나로 합치고, console.log로 출력한다. -->
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';

<!-- 문자열을 concat로 합칠 때에는 맨 처음에 놓일 변수를 기준으로 concat메소드로 호출한다. -->
<!-- 두개 이상의 문자열을 추가하려 할 때, 나머지 변수들은 메소드 인자로 문자열을 순서대로 나열하여 대입하면 된다. -->
console.log(str1.concat(str2, str3, str4));


/*##########################################################################
# [출력결과]
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-24\3_두개의 문자열 하나로 합치기.js"
# Good afternoon, Good evening, and Good night! - The Truman Show, 1998
# Process finished with exit code 0
############################################################################*/