/*
비동기는 동시성이다
비동기는 순서를 보장하지 않는다.
callback, promise를 사용해서 순서를 보장한다.
*/
const DB=[];

function register(user){
    const result = saveDB(user).then(sendMail).then(getResult)
    .catch(console.error)
    .finally(()=>{console.log('finally')});
    console.log('register:'+result);
    return result;
}


function saveDB(user){
    const oldDBSize = DB.length;
    DB.push(user);
    console.log('saveDB:'+user.name);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize){
            resolve(user); // success
        } else {
            reject('DB save error');    //fail
        }
    });
}   

function sendMail(user){
    console.log('sendMail:'+user.email  );
    return new Promise((resolve, reject) => {
        resolve(user); // success
    }); 
}


function getResult(user){
    console.log('getResult:'+user.name  );
    return new Promise((resolve, reject) => {
        resolve('success'); // success
    }); 
}   

const result = register({name:'Mike', email:'abc@abc.com'});  
console.log(result);  // success