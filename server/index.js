//시작점

//모듈 가져오기
const express = require('express');
//새로운 앱 생성
const app = express();
//포트 생성
const port = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User }= require('./models/User.js');


//Body-parser setiing

//application/x-form-encoded 타입 분석에서 서버에 전송
app.use(bodyParser.urlencoded({extended : true}));
//application/json 타입 분석해서 서버에 전송
app.use(bodyParser.json());


//MongoDB 연결
mongoose.connect('mongodb+srv://junkistevekim:154623@bolierplate.j7yxj9c.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('errrrr'))



//실제  Render 되는 데이터
app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요! 노드몬테스트입니다1.')
})

//POST API
app.post('/register', async (req, res) => {
  //회원가입시 필요 정보를 client에서 가져오면
  //데이터베이스에 삽입한다

  //body parser를 통해 body에 담긴 정보를 가져온다
  const user = new User(req.body)

  //mongoDB 메서드, user모델에 저장
  const result = await user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })
})


//5000번 포트에서 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})