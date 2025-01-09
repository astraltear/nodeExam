const url = require('url');
const express = require('express');
const querystring = require('querystring'); // 쿼리 파싱 모듈
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send({ message: "Hello World! Express is running" } ); //  Express.js 응답 전송 및 종료. 내부적으로 res.write와 res.end를 호출하여 데이터를 전송하고 응답을 종료
                                                // 데이터 타입에 따라 자동으로 Content-Type 헤더를 설정합니다.
                                                // JSON 객체를 전달하면 JSON 문자열로 변환하여 전송합니다.
});

app.get('/users', users);
app.get('/posts', posts);


function users(req, res) {
    const user = querystring.parse(url.parse(req.url).query);
    res.json({ message: ` user:${  JSON.stringify(user)  }  user.name: ${user.name}   user.age:${user.age}` });
}

function posts(req, res) {   res.send('POSTS'); }   

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});