
import http from 'k6/http';

export const options = {
    vus: 500,  // virtual users
    duration: '10s', // 10초 동안 계속 요청
};

export default function() {
    let res = http.get('http://localhost:8000/');
    // console.log(res.body);
};


/*
실행 방법
k6를 설치하고 아래의 명령어로 실행한다. 
k6 run loadTestnodeExam1.js

*/