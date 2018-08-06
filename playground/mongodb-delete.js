
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {     //connecting to database
  if(err){
    return console.log('Unable to connect to MongoDB server')
  } //return to prevent the code run further alternative to this can be providing else statement
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp');
//deleteMany

// db.collection('Users').deleteMany({name: "Amnah"}).then((result)=>{
//   console.log(result);
// });

//deleteOne

// db.collection('Todos').deleteOne({text: "code amd coffee"}).then((result)=>{
//   console.log(result);
// });

//findOneAndDelete

db.collection('Users').findOneAndDelete({
  _id : new ObjectID("5b67ff43c49c003ac8436e90")
}).then((result)=>{
  console.log(result);
});
  //client.close();
});
