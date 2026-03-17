//async-await : Promise를 좀 더 간결하게 사용할 수 있도록 도와주는 문법 -> 즉 비동기 처리가 쉽다

// async 함수
// async function f() {}

async function f() {
    return 7;
    // async함수 첫번째 기능
    // 항상 Promise 객체를 반환한다. 
    // 만약 반환값이 Promise가 아니라면, 반환값을 Promise.resolve()로 감싸서 반환한다.
}

f().then(
    function(result){
        console.log("promise resolve : ", result);
    }, 
    function(error){
        console.log("promise reject : ", error);
    }
);