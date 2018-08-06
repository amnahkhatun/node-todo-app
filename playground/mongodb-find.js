
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {     //connecting to database
  if(err){
    return console.log('Unable to connect to MongoDB server')
  } //return to prevent the code run further alternative to this can be providing else statement
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp');

// db.collection('Todos').find({
//   _id: new ObjectID('5b67fddff956713ac1873bbc')
// }).toArray().then((docs)=>{
// console.log('Todos')
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
//   console.log('Unable to fetch Todos', err);
// });


// db.collection('Todos').find().count().then((count)=>{
// console.log(`Todos count: ${count}`);
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
//   console.log('Unable to fetch Todos', err);
// });

db.collection('Users').find({
  name : 'Amnah'
}).toArray().then((docs)=>{
//console.log(`Users count: ${count}`);
console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('Unable to fetch Todos', err);
});


  //client.close();
});
