# CURD_Mongoose-_Express

A REST API is an API that follows the REST (Representational State Transfer) architectural style for creating web services. It provides a set of operations (such as create, read, update, and delete) to interact with data in a MongoDB database over HTTP.

Express is a popular framework for building web applications and APIs in Node.js. It provides a simple and flexible way to handle HTTP requests and responses.

MongoDB is a NoSQL database that is commonly used with Node.js applications. It provides a way to store and retrieve data in a flexible and scalable way.

To create a REST API with Express and MongoDB, you would follow these basic steps:

1. Install Mongoose: & Install Express:
```
npm install mongoose 
```

``` 
npm install express
```
2. Connect to your MongoDB database using Mongoose in your Express app & Create an Express.js application and configure the necessary dependencies and middleware

```
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = 3000;

const url = 'mongodb://127.0.0.1:27017/user';

/************ Connect to Mongoose *******************/
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});
/************* Creat a Server ****************/
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
});
```
3. Define the API routes and handlers for each of the operations you want to support (create, read, update, and delete)
```
/************* Routers ***********************/
app.get('/', (req, res) => {
    userModel.find({}, function(err, docs) {
        res.send(docs);
        console.log(docs);
    });
});
```

4. Use Mongoose models and methods to interact with the MongoDB database in response to API requests.
```
/************* Created Schema ***********************/
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const userModel = mongoose.model('user_Model', userSchema);
```

5. save data in MongoDB using Mongoose and Express
```
/************* Save Data ***********************/
const newData = new userModel({
    name: 'Tec Santoshkumar',
    email: 'tecsantoshkumar@gmail.com'
});

newData.save(function(err) {
    if (err) return handleError(err);
    console.log('Data saved successfully!');
});
```

6. To update an existing document in MongoDB using Mongoose and Express, you can use the Model.updateOne() or Model.updateMany() method.
```
/************* Update Data ***********************/
const condition = { name: 'Tec Santoshkumar' };
const update = { $set: { name: 'Tec Santosh' } };
// updateOne or updateMany will
userModel.updateOne(condition, update, function(err, result) {
    if (err) return handleError(err);
    console.log('Data updated successfully!');
});
```

7. To delete one or more documents from MongoDB using Mongoose and Express, you can use the Model.deleteOne() or Model.deleteMany() method.
```
const condition = { name: 'Tec Santosh' };

userModel.deleteOne(condition, function(err) {
    if (err) return handleError(err);
    console.log('Data deleted successfully!');
});
```

8. To Read an existing document in MongoDB using Mongoose and Express
```
/************* Read Data ***********************/
userModel.find({}, function(err, docs) {
     res.send(docs);
     console.log(docs);
});
```
9. Start the Express.js server and test the API by sending HTTP requests to the API endpoints.
```
node app
```

