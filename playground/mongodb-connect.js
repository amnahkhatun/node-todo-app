//const MongoClient = require('mongodb').MongoClient;

//example of variable destructuring
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'amnah', age: 23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {     //connecting to database
  if(err){
    return console.log('Unable to connect to MongoDB server')
  } //return to prevent the code run further alternative to this can be providing else statement
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp');

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if(err){
//   return console.log('Unable to insert Todo ', err)
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2)); //ops attribute will store all the docs stored in database
// });

// db.collection('Users').insertOne({
//   name: "Amnah",
//   age: '23',
//   location: 'Bangalore'
// }, (err, result)=>{
//   if(err){
//     return console.log('Unable to insert Users', err);
//   }
//
//   console.log(result.ops[0]._id.getTimestamp());
// });

  client.close();
});
