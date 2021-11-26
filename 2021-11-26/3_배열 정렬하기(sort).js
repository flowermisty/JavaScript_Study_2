/**
 * @section into 설명
 *                  - Array객체의 sort메소드의 인자로 비교 함수를 대입하여 배열 요소들을 정렬 한다.
 *                    이때, 비교 함수에서 return으로 반환되는 비교값에 따라 순서가 정해진다.
 *                    비교값의 구체적인 기준은 다음과 같다.
 *
 *                     . 비교값 > 0 : a가 b보다 작은 숫자의 인덱스를 가진다. 배열의 작은 인덱스라는 뜻은
 *                       배열에서 앞부분에 위치하는 것을 의미 한다. 즉 a가 b보다 앞에 위치한다.
 *
 *                     . 비교값 < 0 : b가 a보다  작은 숫자의 인덱스를 가진다. 아까와는 반대로 b가 a보다 앞에 위치한다.
 *
 *                     . 비교값 = 0 : a와 b의 위치를 변경하지 않는다.
 *
 *                   - sort메소드는 새로운 배열을 반환하지 않고 원본 배열 자체를 변경시키므로 주의를 필요로 한다.
 *
 * @example          - 배열.sort(func(a,b){
 *                          return 비교값;
 *                      });
 *
 */


const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];

const objArr = [
    {id : 2, name: 'LEO'},
    {id : 0, name: 'Daniel'},
    {id : 3, name: 'Asher'},
    {id : 4, name: 'Chole'},
    {id : 1, name: 'Chole'}
];

<!-- 비교함수가 a - b를 리턴하여 오름차순으로 배열이 정렬된다. -->
numArr1.sort(function (a,b){return a - b;});

<!-- 비교함수가 b - a를 리턴하여 내림차순으로 배열이 정렬된다. -->
numArr2.sort(function (a,b){return b - a;});

<!-- a가 b보다 크면 1을 b가a보다 크면 -1을 같은경우 0을 리턴 하므로 name의 오름차순으로 정렬된다. -->
objArr.sort(function (a,b){
    if(a.name > b.name) {
        return 1;
    }else if(b.name > a.name){
        return  -1;
    }else{
        return 0;
    }
});


console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);

/*##########################################################################
# 오름차순 : 0,1,2,3,4
# 내림차순 : 4,3,2,1,0
# [
#   { id: 3, name: 'Asher' },
#   { id: 4, name: 'Chole' },
#   { id: 1, name: 'Chole' },
#   { id: 0, name: 'Daniel' },
#   { id: 2, name: 'LEO' }
# ]
# Process finished with exit code 0
############################################################################*/