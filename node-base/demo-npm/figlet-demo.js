const figlet = require('figlet');

figlet("Hello World!!", function (err, data) {
    // 익명의 함수를 쓰는 이유 =. ㅣ 함수를 쓸 일이 다른 데는 없어서..
    // Figlet 만든 사람이, 매개변수로 함수를 받기로 했기 때문

    // 첫번째 매개변수 "Hello world"라는 문자열을 받아서,
    // "아스키 아트를 만든 다음에"
    // 두번쨰 매개변수 function 함수를 실행 
    // 
  if (err) {
    console.log("Something went wrong..."); 
    console.dir(err);
    return;
  }
  console.log(data);
});