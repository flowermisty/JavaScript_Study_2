//ES6에 추가된 Javascript기능인 단축속성명을 활용 객체의 속성을 좀더 간단히 정의 해본다.

var address = 'Seoul';
var members ={};
var addfamily = function(age, name, role){
    this.members[role] = {age, name};
};

var getHeadcount = function(){
  return Object.keys(this.members).length;
};


var family = {address, members, addfamily, getHeadcount};

family.addfamily(30, 'chloe','aunt');
family.addfamily(3, 'lyn','niece');
family.addfamily(10, 'dangdangi','dog');
console.log(family.getHeadcount());