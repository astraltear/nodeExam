
const mongoose = require('mongoose');
const Person = require('./person-model');

const uri = "mongodb+srv://<id>:<pw>@cluster0.hst04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try{

    mongoose.set('strictQuery', false);
    mongoose.connect(uri,{dbName:"test2"})
    .then(() => {   console.log('Connected to MongoDB');      })
    .catch(err => {     console.log('Error:', err);     });

    const person = new Person({ name: 'John', age: 10, email: 'abc@abc.con' });
    await person.save();

    const getPerson = await Person.find();
    console.log(getPerson);

    await mongoose.disconnect();  

  } catch (err) {
    console.log('Error:', err);
  };
  
}



main();