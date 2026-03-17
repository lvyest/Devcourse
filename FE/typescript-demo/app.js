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
        this.gender = GenderType.Male;
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
