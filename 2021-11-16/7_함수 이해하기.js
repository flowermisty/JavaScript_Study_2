var greeting_expression = function(name){
    console.log('Hi, '+name);
}

function greeting_declaration(name){
    console.log('Hi, '+name);
}

greeting_expression('Chloe');
greeting_declaration('Chloe');

//함수 표현식으로 정의한 함수의 함수 이름은 해당 함수 내에서만 호출이 가능하다.