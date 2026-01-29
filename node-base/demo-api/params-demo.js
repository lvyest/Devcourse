import express from 'express'

const app = express()


app.get('/products/:n', (req, res) => {
    //: => 나한테 URL로 매개변수를 전달 해줄 거구나 
    // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
    //console.log(req.params) ==> {n: '3'}
    //console.log(req.params.n) ==> {3}
    let number = parseInt(req.params.n) - 10
    console.log(number)

    if((req.params.n-5) > 10){
        console.log("url로 전달받은 숫자가 10보다 크네요.")
    }

    res.json({
        num : number
    })

})


    // app.get('/:nickname', function(req, res) {
    // const param = req.params

    // res.json({
    //     channel : param.nickname
    // })
    // })

app.get('/watch', function(req, res) {
    // const q = req.query; // q = {v: __, t:__}
    // console.log(q.v)
    // console.log(q.list)
    // console.log(q.start_radio)

    const {v, t} = req.query;
    console.log(v)
    console.log(t)
    res.json({
        video : v,
    });
})


// 서버 세팅 : 포트 넘버 3000으로 셋팅 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})