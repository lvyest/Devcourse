
let error = new Error("대장 에러 객체");
let syntxError = new SyntaxError("구문 에러 객체");
let referenedEror = new ReferenceError("참조 에러 객체");

console.log(error.name); 
console.log(error.message);

console.log(syntxError.name);
console.log(syntxError.message);

console.log(referenedEror.name);
console.log(referenedEror.message); 