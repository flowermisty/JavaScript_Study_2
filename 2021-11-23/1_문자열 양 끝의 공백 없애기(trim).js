/**
 * @brief : 문자열 양끝의 공백을 없애는 trim 내장객체에 대한 설명이다.
 * @details trim 메소드는 문자열의 양끝의 공백, 탭, 줄바꿈을 제거 한다.
 * 단 함수가 적용된 문자열 원본 값에는 영향을 끼치지 않기 때문에 활용하려면,
 * 별도로 값을 저장 해야 한다.
 */


const sentences = ['   ABC abc', 'ABC abc   ', ` first 
second third
        forth
sentence    

`];

<!-- filterSentesce함수는 매개변수로 전달된 배열을 forEach로 순환하여 각요소에 접근한다. -->
const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        <!-- 배열요소에 trim을 적용하여 공백, 탭, 줄바꿈을 삭제하고, 필터링된 값들은 배열로 다시 반환한다. -->
        filtered.push(s.trim());
    });
    return filtered;
}

<!-- filterSentence함수에 sentences를 인자료 함수 호출 -->
console.log(filterSentence(sentences));