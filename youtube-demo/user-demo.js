// express 모듈 셋팅
const express = require('express');
const app = express();
app.listen(7777);
app.use(express.json()) //http 외 모듈 'json'


let db = new Map();
var id = 1; // 하나의 객체를 유니크하게 쿠별하기 위함. PK

function isExist(obj) {
    if(Object.keys(obj).length) {
        return true
    }
    else {
        return false
    }
}

function findByUserId(db, userId){
    let foundUser = {};
    db.forEach(function(user){
        if(user.userId === userId){
            foundUser = user;
        }
    });
    return foundUser;
}

function isPwdCorrect(loginUser, password){
    return loginUser.password === password;
}

//로그인
app.post('/login', (req, res) => {
    console.log(req.body) //userId, pwd

    //userId가 디비에 저장된 회원이지 확인
    const {userId, password} = req.body
    var loginUser = findByUserId(db, userId);

    if (isExist(loginUser)){
        console.log("같은 거 찾았다.")  
        //pwd 같은지 메소드 빼보자. 

        if(isPwdCorrect(loginUser, password)){
            console.log("패스워드도 같다.")
        } else {
            console.log("패스워드는 틀렸다.")
        }
    } else {
        console.log("입력하신 아이디는 없는 아이디입니다.")
    }
})

//회원가입
app.post('/join', (req, res) => {
    console.log(req.body)

    if(req.body != {}){
        db.set(id++, req.body)

        res.status(201).json({
            message : `${db.get(id-1).name}님 환영합니다.`
        })
    }
    else {
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }
})

app
    .route('/users/:id')
    .get((req, res) => {
        let {id} = req.params;
        id = parseInt(id);

        const user = db.get(id);
        if(user == undefined){
            res.status(404).json({
                message : "회원 정보가 없습나다."
            })
        } else {
            res.status(200).json({
                userId : user.userId,
                name : user.name
            })
        }
    })
    .delete((req, res) => {
        let {id} = req.params;
        id = parseInt(id);

        const user = db.get(id);
        if(user == undefined){
            res.status(404).json({
                message : "회원 정보가 없습나다."
            })
        } else {
            db.delete(id)

            res.status(200).json({
                message : `${user.name}님 다음에 또 뵙겠습니다.`
            })
        }
    })


