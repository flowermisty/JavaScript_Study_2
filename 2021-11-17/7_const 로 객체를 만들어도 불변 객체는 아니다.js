const CONST_USER = {name : 'jay', age : 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = {name : 'bbo'};

/*##########################################################################
#  const로 정의된 CONST_USER는 불변 객체가 아니라서 네임 속성에 다른 값을
#  할당할수 있고 마찬가지로 age에도 다른값을 할당할 수 있다. 객체의 내부 상태가
#  변경이 가능하므로 배열을 선언해도 새로운 값을 추가할 수있다.
#  즉 새로운 객체로 재할당은 불가하나 객체내부의 상태는 변경이 가능하다.
############################################################################*/
