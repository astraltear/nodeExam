/*
async는 Promise를 반환한다.
await의 의미는 Promise가 처리될 때까지 기다린다는 뜻이다(resolv or reject).
*/

async function myNames() {  return "Hello World";   }
function myNames2() {   return Promise.resolve("Hello World2");  }


/*  
Promise 객체를 반환하는 것이지 실제 값을 반환하는 것은 아닙니다. 
Promise 내부의 실제 값에 접근하려면 await나 .then()이 필요합니다.
*/
console.log(myNames()); // Promise { 'Hello World' }
console.log(myNames2()); // Promise { 'Hello World' }


async function  getName2() {
    const name= await myNames2();
    console.log(name);
    return name;
}

myNames().then(result => console.log(">>>"+result));  // "Hello World"
const result = getName2();
console.log(result); // Promise { <pending> }


function waitOneSecond(msg) {
    return new Promise(resolve => {
        setTimeout(() => {  resolve(msg);   }, 1000);
    });
}

async function countOneToTen() {    
    for (let i = 1; i <= 10; i++) {
        const msg = await waitOneSecond(i);
        console.log(msg);
    }
    console.log("Done!");
}

countOneToTen();


const axios = require('axios');
const url ="https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";


async function getTop20Movies() {
    try {
        const result = await axios.get(url);
        if (result.status != 200){
            throw new Error('Invalid status code');
        }

        if(!result.data.articleList || result.data.articleList.length == 0){    
            throw new Error('Invalid data');
        }

        if(result.data.articleList){

            const movieInfo = result.data.articleList.map( (article,idx) => {   
                return { title : article.title, rank:idx+1 }; 
            }) ;
            console.log(movieInfo) ;
        }
    } catch (error) {
        console.error(error);
    }
}


getTop20Movies();
