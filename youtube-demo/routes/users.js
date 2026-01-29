const express = require('express');
//라우터가 확인할 수 있게만 하면됨
const router = express.Router()

router.use(express.json()) //http 외 모듈 'json'


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
router.post('/login', (req, res) => {
    console.log(req.body) //userId, pwd

    //userId가 디비에 저장된 회원이지 확인
    const {userId, password} = req.body
    var loginUser = findByUserId(db, userId);

    if (isExist(loginUser)){
        //pwd 같은지 메소드 빼보자. 

        if(isPwdCorrect(loginUser, password)){
            res.status(200).json({
                message : `${loginUser.name}님 로그인 되었습니다.`
            })
        } else {
            res.status(400).json({
                message : "비밀번호가 틀렸습니다."
            })        
        }
    } else {
            res.status(400).json({
                message : "회원 정보가 없습니다."
            })    
    }
})

//회원가입
router.post('/join', (req, res) => {
    console.log(req.body)

    if(req.body == {}){
        res.status(400).json({
            message : `입력 값을 다시 확인해주세요.`
        })
    }
    else {
        const {userId} = req.body
        db.set(userId, req.body)

        res.status(201).json({
            message : `${db.get(userId).name}님 환영합니다.`
        }) 
    }
})

router
    .route('/users')
    .get((req, res) => {
        let {userId} = req.body;

        const user = db.get(userId);
        if(user){
            res.status(200).json({
                userId : user.userId,
                name : user.name
            })
        } else {
            res.status(404).json({
                message : "회원 정보가 없습나다."
            })
        }
    }) // 회원 개별 조회
    .delete((req, res) => {
        let {userId} = req.body;

        const user = db.get(userId);
        if(user ){
            db.delete(id)

            res.status(200).json({
                message : `${user.name}님 다음에 또 뵙겠습니다.`
            })
        } else {
            res.status(404).json({
                message : "회원 정보가 없습나다."
            })
        }
    })


module.exports = router