/*##########################################################################
# 자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 "속성기술자"
# 를 가지고 있다. 속성기술자는 객체로 표현되며
############################################################################*/

let user = {
  name : 'jaedo'
};

let descriptor = Obj.getOwnPropertyDescriptor(user,'name');//객체속성 기술자 객체를 가져온다.
console.log(descriptor);

let user2={};
Object.defineProperty(user2,'name',{ // 객체를 선언하고 해당 객체의 속성을 정의 할 수 있다.
    value : 'jaedo',
    enumerable : true,
    configurable : true,
    writable : false
});

console.log(user2.name);
user2.name ='bbo';
console.log(user2.name);


let user3 = {
  name : 'jaedo',
  toString(){
      return this.name;
  }
};

Object.defineProperty(user3, "toString",{
   enumerable : false
});

for (let key in user3) {
    console.log(key);
}

let user4 = {};
Object.defineProperty(user4,'name',{
   value : 'jaedo',
   configurable : false
});

delete user4.name
console.log(user4);
Object.defineProperty(user4,'name',{
   writable:true
});