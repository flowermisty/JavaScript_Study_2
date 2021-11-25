/**
 * @section into 설명
 *                  - String 내장객체의 메소드 split은 문자열을 배열로 변환하여 반환한다.
 *                    이때 split은 인자로 받은 구분자로 문자열을 분리한 후 각각을 배열 요소에 넣는다.
 *
 */


const capitals = `Prague, Czech Republic 
Copenhagen, Denmark 
Paris, France
Mardrid, Spain
Rome, Italy`;


/*##########################################################################
# split메소드를 활용하여 변수 capitals의 문자열 값을 줄바꿈으로 분리한다.
############################################################################*/

<!-- 배열로 변환된 값은 forEach를 통해 순환하면서 각 요소로 접근할 수 있다.-->
capitals.split('\n').forEach(s =>{
   <!-- 배열로 변환된 각 요소들에 접근하여 요소에 대한 문자열을 다시 ,로 스플릿 하여 각각의 변수에 저장한다. -->
   const capital = s.split(",")[0];
   const contury = s.split(",")[1];
   console.log(`${capital} is in ${contury}`);
});


/*##########################################################################
# [결과확인]
# "C:\Program Files\nodejs\node.exe" "C:\Users\user\PhpstormProjects\JavaScriptEx\javascript200\2021-11-25\2_문자열을 특정 구분자에 의해 배열로 나누기(split).js"
# Prague is in  Czech Republic
# Copenhagen is in  Denmark
# Paris is in  France
# Mardrid is in  Spain
# Rome is in  Italy
# Process finished with exit code 0
############################################################################*/