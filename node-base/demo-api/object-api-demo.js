import express from 'express'

const app = express()

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})

let youtuber1 = {
    channelTitle : "YES24",
    sub : "20.1만명",
    videoNum : "1.2천개"
}

let youtuber2 = {
    channelTitle : "해쭈 [HAEJOO]",
    sub : "82.7만명",
    videoNum : "507개"
}

let youtuber3 = {
    channelTitle : "딩고 뮤직 / dingo music",
    sub : "547만명",
    videoNum : "3.2천개"
}

app.get('/:nickname', function(req, res) {
    const {nickname} = req.params
    if(nickname == "@yes24_official"){
        res.json(youtuber1)
    }
    else if(nickname == "@HAEJOOOOO"){
        res.json(youtuber2)
    }
    else if(nickname == "@DingoMusic"){
        res.json(youtuber3)
    }
    //개발자가 예상하지 못한 에러 = 예외가 발생했다 !
    else{
        res.json({
            "message" : "죄송합니다. 모르는 유튜버입니다."
        })
    }
})


