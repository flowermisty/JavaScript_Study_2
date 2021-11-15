//for 반복문에 대하여 알아본다.

for (var i = 0; i < 10; i++) {
    console.log(i+ '번째 반복 문장 입니다.');
}


var hometown = [
    {name : '남준', place: '일산', city: '고양'},
    {name : '진', place: '과천'},
    {name : '호석', place: '광주', city: '전라도'},
    {name : '지민', place: '부산', city: '경상도'}
];


for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city){
        continue;
    }
    console.log(i + '번째 실행입니다.');

    if(h.name === '호석'){
        console.log(h.name + '의 고향은' + h.city + ' ' + h.place + '입니다.')
        break;
    }
}


//반복문 for in에 대하여 알아본다.
//for-in 반복문은 for반복문과 비슷하게 for 키워드를 사용한다.
//단 순회 조건과 내부 요소에 접근하는 방법에 차이가있다.
//in 키워드를 사이에 두고 오른쪽에는 반복할 대상 변수, 왼쪽에는 속성명을 정의 한다.


var store = {
    snack : 1000,
    flower : 5000,
    beverage : 2000
};

for (item in store){
    if(!store.hasOwnProperty(item)){
        continue;
    }
    console.log(item + '은 가격이' + store[item]+ ' 입니다.');
}