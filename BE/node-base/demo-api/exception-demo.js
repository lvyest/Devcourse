import express from 'express'
const app = express()
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

const fruits = [
    {id : 1, name : 'apple'},
    {id : 2, name : 'orange'},
    {id : 3, name : 'strawberry'},
    {id : 4, name : 'blu eberry'},
]

// 과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits) //json array
})

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
    let id = req.params.id
    //let fruit = fruits[id-1]
    var findFruit = fruits.find(f => f.id == id)
    // fruits 배열 안에 있는 객체 중, id값이 params.id랑 같은 객체 

    if(findFruit) res.json(findFruit)
    else //예외를 터트린다 = http status code 성공 X 실패!
    {
        res.status(404).json({
            message : "전달해주신 id로 저장된 과일이 없습니다."
        })
    }
})

