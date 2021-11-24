/**
 *
 *  @brief : length는 String 객체의 미리 정의 되어 있느느 기본 속성 이다. 이를 통해 문자열의 길이를 구할수 있다.
 *
 */



<!-- 변수 arr에 두 개의 문자열을 요소로 갖고 있는 배열을 대입한다.-->
const arr = ['short', 'long sentence, it is not appropriate'];


/**
 * @brief : arr을 forEach로 순환하여 내부요소에 접근한다. 이때 길이가 10보다 작은 경우에만
 *          console.log로 값을 출격한다.
 *
 * @detail : 해당 조건문은 변수 arr 내부 값 중에서 short만 해당하므로 short만 출력되고, 다른 문자열은 출력되지 않는다.
 */

arr.forEach(str => {
    if (str.length < 10) console.log(str);
});

/*##########################################################################
#                                [실행결과]
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-24\1_문자열 길이 구하기(length).js"
# short
# Process finished with exit code 0
############################################################################*/