var jwt = require('jsonwebtoken');
const express = require('express');
const app = express()
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path: path.join(__dirname, '../.env')})

// 서버 세팅 : 포트 넘버 3000으로 셋팅 
app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

// GET + "/jwt" : 토큰 발행
app.get('/jwt', (req, res) => {
  const token = jwt.sign({
    username : "kim kayoung"
  }, process.env.PRIVATE_KEY, {
    expiresIn : '5m',
    issuer : "kayoung"
  })

  res.cookie("jwt", token, {
    httpOnly : true // 자바스크립트로 쿠키에 접근하는 것을 막음 (보안 강화)
  })
  res.send('토큰 발행 완료!');
});

// GET + "/jwt/decoded" : 토큰 검증
app.get('/jwt/decoded', (req, res) => {
  let receivedJwt = req.headers["authorization"];
  console.log(receivedJwt);
  var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

  // 토큰 유효기간이 지났을 떄 500 에러 예외처리
  // 유효기간이 지난 토큰 => res. '로그인(인증) 세션이 만료되었습니다. 다시 로그인해주세요'

  res.send(decoded);
});
