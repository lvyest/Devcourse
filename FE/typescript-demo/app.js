//변수의 데이터 타입 명시
//let stdId : number = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
//열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
//Student 상속
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 12345;
        this.stdName = 'kim';
        this.age = 23;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return "kim";
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('엘리스');
// function getInfo(id : number) : Student{
//     return {
//         stdId : id,
//         stdName : 'lee',
//         //age : 20,
//         gender : GenderType.Female,
//         course : 'javascript',
//         completed : true
//     };
// }
var std = {
    stdId: 12345,
    stdName: 'kim',
    age: 23,
    gender: GenderType.Male,
    course: 'node.js',
    completed: true
};
function setInfo(student) {
    console.log(student);
}
//setInfo(std);
//console.log(getInfo(5678));
//함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b : number) : number{
//     return a + b;
// }
// type strOrNum = number | string;
// let numStr : strOrNum = '100';
// function convertToString(val : strOrNum) : string {
//     return String(val);
// }
// function convertToNumber(val : strOrNum) : number {
//     return Number(val);
// }
// const user : {name : string, age: number} = {
//     name: 'john',
//     age: 25
// }
// let anyVal : any = 100;
// anyVal = 'kim';
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[] = ['apple', 'banana', 'orange'];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// //배열의 유니온 타입
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
// for(let i = 0; i < mixedArray.length; i++){
//     console.log(mixedArray[i]);
// }
// let infer = [1,2,3]; //타입 추론
// for(let i = 0; i < infer.length; i++){
//     console.log(infer[i]);
// }
// let readOnlyArray : ReadonlyArray<number> = [1,2,3];
// //튜플 : 타입의 순서가 정해져 있다. 
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++){
//     console.log(greeting[i]);
// }
// //Spread 연산자
// let firstArray = [1,2,3];
// let secondArray = [4,5,6];
// let combineArray = [...firstArray, ...secondArray];
// //... : 대괄호를 풀어줌
// for(let i = 0; i < combineArray.length; i++){
//     console.log(combineArray[i]);
// }
