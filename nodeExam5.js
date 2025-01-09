/*
비동기는 동시성이다
비동기는 순서를 보장하지 않는다.
callback, promise를 사용해서 순서를 보장한다.
*/

const DB=[];

function register(user){
    return saveDB(user, function(user){
        return sendMail(user, function(user){         
            return getResult(user);
        });   
    } )
}


function saveDB(user, callback){
    DB.push(user);
    console.log('saveDB:'+user.name);
    return  callback(user);
}   

function sendMail(user, callback){
    console.log('sendMail:'+user.email  );
    return callback(user);
}


function getResult(user){
    console.log('getResult:'+user.name);
    return "success";
}   

const result = register({name:'Mike', email:'abc@abc.com'});  
console.log(result);  // success