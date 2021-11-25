/**
 * @section into 설명
 *                  - Array 내장 객체는 배열의 길이를 확인 할 수 있는 length속성을 가지고 있다.
 */

<!-- 객체 리터럴이 할당된 변수 ship을 선언합니다. -->
const ship ={
    <!-- ship객체의 첫번째 속성으로 key이름은 맥스, 값은 숫자 4를 정의 한다. 이는 ship의 정원 수를 의미한다.-->
    max : 4,

    <!-- 두번째 속성의 passengers는 탑승객 리스트를 의미한다. -->
    passengers : [],


    onBoard: function (name){
        <!-- ship객체의 passengers속성에 접근하여 배열 길이를 확인 한다. -->
        if(this.passengers.length === 4){
            console.log(`This ship is full, ${name} can not noard this ship.`);
        }else{
            this.passengers.push(name);
            console.log(`${name} boarded`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');

console.log(ship.passengers);