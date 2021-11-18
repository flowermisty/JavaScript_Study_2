/*##########################################################################
# 자바스크립틔의 객체를 객체지향에서 말하는 객체로 사용하려면 코드를 작성해야 하는
# 프로그래머가 그에 맞게 작성해야 합니다. 단순이 객체를 정의하였다고 객체지향 프로르래밍을
# 하는 것은 아니다.
############################################################################*/

const teacherJay = {
    name:"제이",
    age : 30,
    teachJavascript : function (student) {
        student.getExp();
    }
}

const studentBbo = {
    name : '뽀',
    age : 20,
    exp : 0,
    getExp : function () {
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);


console.log('==============================================');



const studentProto = {
    gainExp : function () {
        this.exp++;
    }
};

const harin = {
    name : '하린',
    age : 10,
    exp : 0,
    __proto__ : studentProto
};

const bbo = {
    name : '뽀',
    age : 20,
    exp : 10,
    __proto__ : studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);
