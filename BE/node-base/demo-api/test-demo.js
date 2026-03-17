import express from 'express'

const app = express()

// API 테스트
// GET + "/"
// get으로 '/test'이 날라오면, 매개변수로 전달받은 콜백 함수를 호출하겠어 -> 서버에 세팅
app.get('/test', (req, res) => {
  res.json({
    say : 'Test'
  })})

app.get('/test/1', (req, res) => {
  res.json({
    say : '만나서 반갑습니다'
  })})


// 서버 세팅 : 포트 넘버 3000으로 셋팅 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})