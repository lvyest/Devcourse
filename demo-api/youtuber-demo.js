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

db.set(1, youtuber1) // 키로 벨류를 찾을 수 있는 한 쌍을 저장 
db.set(2, youtuber2)
db.set(3, youtuber3)


// REST API 설계
app.get('/youtuber/:id', function(req, res){
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

app.get('/', function(reqs, res){
    res.send('Hello World')
})