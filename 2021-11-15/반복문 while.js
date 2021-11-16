/*#################################################
# while 반복문은 지시어 while로 시작한다.
# ()안에 조건식이 들어가고 조건식의 결괏값은 true / false만 가능 하다
# true 조건식을 만족하는 경우에만 코드가 실행된다.
# 조건식이 false이가 되면 더이상 반복하지 않는다.
# for문과 동일하게 break와 continue문을 사용할 수 있다.
################################################# */

var hometown = [
    {name : '진', city: '과천'},
    {name : '남준', place: '일산', city: '고양'},
    {name : '호석', place: '광주', city: '전라도'},
    {name : '지민', place: '부산', city: '경상도'}

];

var ishometown = function (h, name){
    console.log(`함수가 실행되었습니다. ${h.city}도시에서 ${name} 을 찾습니다.`);

    if (h.name === name) {
        console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }
    return false;
}

var h;

while(h = hometown.shift()){
    if(!h.name || !h.place || !h.city){
        continue;
    }

    var result = ishometown(h,'호석');

    if(result){
        break;
    }
}



var i = 0;
var names = ['남준','정국','윤기','호섭'];
var cities = ['경기','부산','대구','광주'];

do{
    hometown[i] = {name:names[i], city:cities[i]};
    i++;
}while(i < 4);

console.log(hometown);