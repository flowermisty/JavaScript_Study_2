/*##########################################################################
# 자바스크립트는 변수의 자료형이 동적으로 바뀔 수 있기 때문에 의도한 자료형인지
# 확인해야 하는 경우가 종종 있다. isArray메소드는 배열 자료형 여부를 true/false로
# 간단하게 구별할 수 있다.
############################################################################*/


function callRoll(students) {
    if (!Array.isArray(students)) return;
    
    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);