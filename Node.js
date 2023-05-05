// NODE.JS - JavaScript runtime environment - by Beumsk



let express = require('express');
// import express from 'express';
let app = express();

const PORT = 8000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));

// METHODS
app.get('/route', function() {});
app.post('/route', function() {});
app.delete('/route', function() {});
app.put('/route', function() {});

// chain methods with this syntax
app.route('/route').get(function() {}).post(function() {});


// ??ACTIONS??
app.get('/', function(req, res) {
  res.send('Hello World');
  res.sendFile(__dirname + '/index.html'); // needs absolute path
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
  res.json({"message": "Hello json"});
  const method = req.method; // GET, POST, DELETE, PUT
  const path = req.path; // for example /json
  const ip = req.ip; // ip address
});

app.get('/user/:userId', function(req, res) { // /user/543
  const params = req.params; // route parameters {userId: '543'}
  res.json({'userId': params.userId});
});

app.get('/user', function(req, res) { // /user?userId=543
  const query = req.query; // route query {userId: '543'}
  res.json({'userId': query.userId});
});


// ENV VAR 
// needs dotenv package
// in .env file
NAME_OF_VARIABLE=thevalue
// use it anywhere
require('dotenv');
const secret = process.env['NAME_OF_VARIABLE'];


// BODY PARSER
// handle data from a form (<form action="/name" method="post")
// needs body-parser package
let bodyParser = require('body-parser');
app.use('/name', bodyParser.urlencoder({extended: false}));
app.post('/name', function(req, res) {
  const name = req.body;
  res.json({'name': name.first + ' ' + name.last});
})








// MONGODB
// https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/
// https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
// New project 
// new DB (or cluster) 
// new user with 'read and write to any database' (security > database access)
// access all API (security > network access)
// connect (deployment > database) => mongodb+srv://<username>:<password>@<cluster-name>.prx1c.mongodb.net/<db-name>?retryWrites=true&w=majority
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:azerty@cluster0.fnwaqdz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

// create schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = mongoose.model('Person', personSchema);

// create record and save
const createAndSavePerson = (done) => {
  var johnDoe = new Person({name: "John Doe", age: 34, favoriteFoods: ['egg', 'meat']});
  johnDoe.save((err, data) => {
    if (err) return console.error(err);
    done(null , data);
  })
};

// create many records
const arrayOfPeople = [
  {name: "Jane", age: 38, favoriteFoods: ['salad']},
  {name: "Jude", age: 31, favoriteFoods: ['fruits']}
];
const createManyPeople = (arrayOfPeople, done) => {  
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null , data);
  })
};

// find records
const personName = "Jane";
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => {
    if (err) return console.error(err);    
    done(null , data);
  });
};

// find one record
const food = ['salad'];
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) return console.error(err);    
    done(null , data);
  });
};

// find by _id
const personId = 1;
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);    
    done(null , data);
  });
};









