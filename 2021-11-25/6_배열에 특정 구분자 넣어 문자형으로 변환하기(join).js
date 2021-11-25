/**
 * @section into 설명
 *                  - Array객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 변환 한다.
 */

<!-- dialogue변수에 문자열 배열을 넣어 선언한다. -->
const dialogue=[
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];


<!-- dialogue배열요소에 '.'구분자를 넣어 문자열로 병합한다. -->
console.log(dialogue.join('. '));

<!-- dialogue배열요소에 개행 구분자를 넣어 문자열로 병합한다.-->
console.log(dialogue.join('.\n'));


/*##########################################################################
# [실행결과]
# Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. I sense much fear
# in you.
# Fear is the path to the dark side.
# Fear leads to anger.
# Anger leads to hate.
# Hate leads to suffering.
# I sense much fear in you.
############################################################################*/