const crypto = require('crypto');

const password = "1111";

//비밀번호 암호화
const salt = crypto.randomBytes(10).toString('base64'); //매개변수로 들어오는 걸로 64길이의 랜덤바이트만들고 base64방식의 문자열로 담음
const hashPassword = crypto.pbkdf2Sync(password, salt, 1000, 10, 'sha512').toString('base64'); //암호화 알고리즘 10000 : 해시함수 반복횟수 / 64 : 길이

console.log(hashPassword);

// 회원가입 시 비밀번호를 암호화해서 암호화된 비밀번호와, salt 값을 같이 저장
// 로그인 시, 이메일&비밀번호(날 것) => salt값 꺼내서 비밀번호 암호화 해보고 => 디비 비밀번호랑 비교 