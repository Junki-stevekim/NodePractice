//시작점

//모듈 가져오기
const express = require('express')
//새로운 앱 생성
const app = express()
//포트 생성
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junkistevekim:154623@bolierplate.j7yxj9c.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('errrrr'))




app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요! 노드몬테스트입니다.')
})

//5000번 포트에서 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})