/* 일급 객체 */
//1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function fun1(arg) {
    arg();
}

function fun2() {
    console.log("fun2 함수가 실행되었습니다.");
}

fun1(fun2); // fun2 함수를 fun1의 매개변수로 전달

//2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
function fun3(arg) {
    return arg;
}

function fun4() {
    console.log("fun4 함수가 실행되었습니다.");
}

fun3(fun4)(); // fun4 함수를 fun3의 매개변수로 전달하고, fun3의 반환값인 fun4 함수를 즉시 실행


//3. 자바스크렙트 함수는 할당 명령문의 대상이 될 수 있다.
//4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다.
const fun5 = function (arg) {
    return arg;
}

fun5(1);

/* 매개변수 */
// 1. 기본값 매개변수 Default function parameter
function fun6(arg = 1) {
    console.log(arg);
}
fun6(); // 1

// 2. 나머지 매개변수 Rest parameter
function fun7(arg, ...rest) {
    console.log(rest);
}
fun7(1, 2, 3, 4); // [2, 3, 4]

// 3. arguments 객체
function fun8(arg) {
    console.log("arguments:", arguments);
}

fun8(1, 2, 3); // [1, 2, 3]


/* 함수 생성 */
// 1. 함수 선언문
function fun9() {
    console.log("fun9 함수가 실행되었습니다.");
}   
fun9();

// 2. 함수 표현식
const fun10 = function() {
    console.log("fun10 함수가 실행되었습니다.");
}
fun10();

// 3. Function 생성자 함수
const fun11 = new Function("console.log('fun11 함수가 실행되었습니다.');");
fun11();

// 4. 화살표 함수 표현식
const fun12 = () => {
    console.log("fun12 함수가 실행되었습니다.");
}
fun12();

/* 함수 형태 */
// 1. IIFE (즉시 실행 함수)
(function() {
    console.log("즉시 실행 함수가 실행되었습니다.");
})();

// 2. 재귀 함수
function fun13(arg) {
    if(arg === 3) return;

    console.log(arg);
    fun13(arg + 1);
}
fun13(0); 

// 3. 중첩 함수
function fun14(arg) {
    function innerFun() {
        console.log("innerFun 함수가 실행되었습니다. arg:", arg);
    }
    innerFun(); 
}

fun14(1);

// 4. 콜백 함수
function fun15(arg) {
    arg(); 
}

fun15(() => {
    console.log("콜백 함수가 실행되었습니다.");
});

// console.log("콜백 함수가 실행되었습니다."); 이 함수가 fun15 인자로 전달되어 fun15 함수 내부에서 실행된다.



