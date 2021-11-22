/*값이 NaN이므로 true*/
console.log(Number.isNaN(NaN));

/*undefined false*/
console.log(Number.isNaN(undefined));

/*문자열 false*/
console.log(Number.isNaN('Is it Number?'));

/*숫자형 false*/
console.log(Number.isNaN(0));

/**/
console.log(Number.isNaN(null));
console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));