const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = 3000;

// mongoose DB URL
const url = 'mongodb://127.0.0.1:27017/testgatway';

/************ Connect to Mongoose *******************/
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});

/************* Created Schema ***********************/
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const userModel = mongoose.model('user_Model', userSchema);

/************* Save Data ***********************/
const newData = new userModel({
    name: 'Tec Santoshkumar',
    email: 'tecsantoshkumar@gmail.com'
});

newData.save(function(err) {
    if (err) return handleError(err);
    console.log('Data saved successfully!');
});

/************* Update Data ***********************/
const condition = { name: 'Tec Santoshkumar' };
const update = { $set: { name: 'Tec Santosh' } };
// updateOne or updateMany will
userModel.updateOne(condition, update, function(err, result) {
    if (err) return handleError(err);
    console.log('Data updated successfully!');
});


/************* Delete Data ***********************/
const condition = { name: 'Tec Santosh' };

userModel.deleteOne(condition, function(err) {
    if (err) return handleError(err);
    console.log('Data deleted successfully!');
});


/************* Read Data ***********************/
userModel.find({}, function(err, docs) {
    // res.send(docs);
    // console.log(docs);
});

/************* Routers ***********************/
app.get('/', (req, res) => {
    userModel.find({}, function(err, docs) {
        res.send(docs);
        console.log(docs);
    });
});

/************* Creat a Server ****************/
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}/`);
});