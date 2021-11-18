/*생성자 함수를 정의한다, 내부속성으로 dataStore를 가지고 빈객체를 할당한다.*/
function Storage(){
    this.dataStore ={};
}

/*##########################################################################
# 생성자 함수의 프로토타입 객체에 put메소드를 추가한다. put메소드는 주어진 키에 해당하는
# 값을 datastore에 할당한다.
############################################################################*/
Storage.prototype.put = function(key,data){
    this.dataStore[key] = data;
}

Storage.prototype.getData = function(key){
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001',{name:'키보드', price: 2000});
console.log(productStorage.getData('id001'));

function RemovableStorage(){
    Storage.call(this);
}

RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function (){
    this.dataStore = {}
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001',{name:'키보드',price:2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);