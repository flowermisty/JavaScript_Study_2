/*##########################################################################
# 1~14 : 속성기술자를 통해 user 객체의 age속성을 정의 하고, 이때 값에 접근하는 방식을
# 정의하는 객체를 전달하는데 이를 접근 기술자라고 하고, get과 set을 메소드로 가진다.
# age속성의 접근기술자의 get메소드는 속성에 접근할 때 호출 됩니다. 그리고 set메소드는 속성에
# 값을 대입할때 호출된다.
############################################################################*/

let user ={};
Object.defineProperty(user,'age',{
   get : function () {
       return this._age;
   },
    set : function (age) {
        if(age < 0){
            console.error('0보다 작은 값은 올 수 없습니다.');
        }else{
            this._age = age;
        }
    },
    enumerable : true
});

user.age = 10;
console.log(user.age);
user.age = -1;

let user2 ={
    get name(){
        return this._name;
    },
    set name(val){
        if (val.length < 3){
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';