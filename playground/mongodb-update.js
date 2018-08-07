
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {     //connecting to database
  if(err){
    return console.log('Unable to connect to MongoDB server')
  } //return to prevent the code run further alternative to this can be providing else statement
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({
  _id:new ObjectID("5b68074b66c783aca0021174")
},{
  $set: {
    completed: false
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
  //client.close();
});
