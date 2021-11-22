function verifyInteger(n) {
    /**함수에 대입된 값이 정수가 아니면 산술 처리 불가로 인식한다.
     * 바로 0을 리턴 하며 함수를 빠져 나온다.
     * 함수에 대입된 값이 정수인경우 함수에 대한 결과 값으로 반환한다.
     * */
    if (!Number.isInteger(n)) return 0;
    return n; 
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);