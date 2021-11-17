/*##########################################################################
#  ES6가 나오기 전까지 변수는 var키워드로만 정의할 수 있었다. 하지만 ES6에서
#  let 키워드가 나오면서, 변수선언시 변수의 유효 범위를 블록 범위로 지정할 수 있게
#  되었다.
############################################################################*/

if (true){
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue); //global
console.log(blockScopeValue); //referenceError

console.log('==============================================');

let value = '바깥값';

if(true){
    console.log(value);
    let value = '안쪽값';
}
