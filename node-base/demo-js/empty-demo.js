const obj1 = {}
const obj2 = {message : "안 빔"}
const num = 1
const str1 = "one"
const str2 = "" // 문자열도 객체!

//Object.keys(obj1) -> []
//Object.keys(obj2) -> ['message']
console.log(Object.keys(obj1).length === 0); //length === 0 => true
console.log(Object.keys(obj2).length === 0); //length === 1 => false


//console.log(Object.keys(num).length === 0); 
// => true 숫자는 아예 말이 안됨 => Empty 확인할 때에는 객체인지 확인과정 필요

console.log(Object.keys(str1).length === 0); // => false
console.log(Object.keys(str2).length === 0); // => true

//이렇게 함수로 빼서 사용
function isEmpty(obj) {
    if(obj.constructor  === Object) {
        if(Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isEmpty(obj1)); //length === 0 => true
console.log(isEmpty(obj2)); //length === 1 => false

console.log(Object.keys(str1).length === 0); // => false
console.log(Object.keys(str2).length == 0); // => true