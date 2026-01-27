//express 모듈 셋팅
import express from 'express'
const app = express()
app.listen(3004, () => {
    console.log("Server is running on http://localhost:3004")
})

// 데이터 셋팅
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


let db = new Map()
var id = 1

db.set(id, youtuber1) // 키로 벨류를 찾을 수 있는 한 쌍을 저장 
db.set(id++, youtuber2)
db.set(id++, youtuber3)

app.get('/youtubers',  function(req, res){
    var youtubers = {} // 클리어 코드에서는 데이터형태 넣지 않음. 
    db.forEach(function(value, key){
        youtubers[key] = value
    });

    res.json(youtubers)
})

// REST API 설계
app.get('/youtubers/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)
    
    const youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {    
        res.json(youtuber)            
    }
})

app.use(express.json()) // http 외 모듈인 '미들웨어': json 설정
app.post('/youtubers', (req, res) => {
    console.log(req.body)
    //등록 : Map(db)에 저장(put) 해줘야됨
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다!`
    })

})

app.delete('/youtubers/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    }
    else {
        const channelTitle = youtuber.channelTitle
        db.delete(id)

        res.json({
            message : `${channelTitle}님, 아쉽지만 우리 인연은 여기까지 인가요..`
        })  
    }
})

app.delete('/youtubers', function(req, res){
    var msg = ""
    // db에 값이 1개 이상이면, 전체 삭제
    if(db.size >= 1){
        db.clear()
        msg = "전체 유튜버가 삭제되었습니다."
    }
    else{ // 값이 없으면, 
        msg = "삭제할 유튜버가 없습니다."
    }

    res.json({
        message : msg
    })
})

app.put('/youtubers/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber= db.get(id)
    var oldTitle = youtuber.channelTitle
    if(youtuber == undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else {
        var newTitle = req.body.channelTitle

        youtuber.channelTitle = newTitle
        db.set(id, youtuber)

        res.json({
            message : `${oldTitle}님, 채널명이 ${newTitle}으로 수정되었습니다.`
        })
    }
})