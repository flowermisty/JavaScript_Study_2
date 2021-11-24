/**
 * @section into 설명
 *                  - String내장 객체의 메소드인 chaAt()은 숫자형 인자를 받는다. 괄호안에 대입된 값은 문자열에서
 *                    인덱스를 카리키고 해당 위치의 문자를 반환한다.
 */




const str = 'Good afternoon, Good evening, and Good night! '
    + '- The Truman Show, 1998';


<!-- 인덱스 0, 5, 14 의 위치의 문자를 반환한다.-->
console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.charAt(14));
console.log(str.length);

<!-- 문자열의 길이를 넘어서는 값을 인자로 넣으면 빈값이 출력 된다. -->
console.log(str.charAt(500));


/*##########################################################################
# [출력결과]
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-24\4_특정위치의 문자 반환하기.js"
# G
# a
# ,
# 69
# Process finished with exit code 0
############################################################################*/