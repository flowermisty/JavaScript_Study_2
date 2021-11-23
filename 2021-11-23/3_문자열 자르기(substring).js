/**
 * @brief: string 내장객체의 substring 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다.
 *
 * @detail: 두번째 인자인 종료 인덱스는 선택 사항이므로 필수값은 아닙니다. substring 메소드 실행 결과 값은
 *          새로운 문자열을 반환하며 기존 문자열을 변경 하지 않는다.
 */





const sentence = 'This will be the end of Wakanda';

<!-- 두번째 인자없이 첫 번째 인자에만 인덱스 13을 대입합니다. 변수 sentence의 13번째 인덱스 부터 마지막까지의 문자열을 반환 한다.-->
console.log(sentence.substring(13));


<!-- 시작 인덱스 13, 종료 인덱스 20으로 지정한다. 따라서 인덱스가  13부터 20까지의 문자열을 반환 한다. -->
console.log(sentence.substring(13, 20));


<!-- 시작 인덱스0 은 첫번째 문자를 의미한다. 두번째 인자가 없기 때문에 처음부터 끝까지 전체 문장을 출력 한다. -->
console.log(sentence.substring(0));


<!-- substring 메소드는 음수를 넣으면 뒤에서 부터 찾는 것이 아니라 정상 작동을 하지 않는다.-->
console.log(sentence.substring(0, -20));

<!-- 문자열 길이를 뛰어넘는 값을 인가로 넣으면 빈값을 반환한다. -->
console.log(sentence.substring(50));

<!-- 첫번째 인자가 두번째 인자보다 크면 두개의 인수를 교환하여 수행한다. 따라서 13, 20의 결과가 출력된다.-->
console.log(sentence.substring(20, 13));


/*##########################################################################
#                               [실행결과]
# the end of Wakanda
# the end
# This will be the end of Wakanda
# the end
############################################################################*/