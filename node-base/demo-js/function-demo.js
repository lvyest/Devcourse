function add1(x,y){
    return x+y;
}

//위의 것을 모듈화 하기 위함
let add2 = function(x,y){
    return x + y
}

//화살표 함수 (arrow function)
//function 대신 =>
const add3 = (x,y) => {
    return x + y
}

//return으로 한번에
var add4 = (x,y) => x + y 

console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))