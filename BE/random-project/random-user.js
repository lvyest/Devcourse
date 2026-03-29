const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

//localhost:5555/fake/users?num=10
app.get('/fake/users/', function(req, res){
    const {num} =req.query;

    let users = [];
    let index = 1;
    while (index <= num){
        users.push({
            email : faker.internet.email(),
            password : faker.internet.password(),
            fullName : faker.person.fullName(),
            contact : faker.phone.number()
        });
        index++;
    }
    res.status(200).json(users);
})

//
app.listen(5555);