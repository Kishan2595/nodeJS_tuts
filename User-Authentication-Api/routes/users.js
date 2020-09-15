const express = require("express");
const router = express.Router()
const uuid = require('uuid');
const db = require('../config/database');
const User = require('../models/User')

// Gets All Members
router.get ('/', (req, res) => 
    // res.json(users);
    User.findAll()
        .then(users => {
            console.log(users)
            res.sendStatus(200)
        })
        .catch(err => console.log(err)))

// Create User
router.post('/users', (req, res) => {
    const user = {
        id: uuid.v4(),
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    users.push(user)
    res.status(201).send()
});

module.exports = router;