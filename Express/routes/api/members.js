const express = require('express');
const router = express.Router()
const uuid = require('uuid');
const members = require('../../Members');

// Gets All Members
router.get('/', (req, res) => res.json(members));

//  Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id ===  parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No members with id ${req.params.id}`})
    }
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        username: req.body.username,
        password: req.body.password
    }

    if(!newMember.username || !newMember.password) {
        return res.status(400).json({ msg: 'Please include a username and password'})
    }
    members.push(newMember);
    res.json(members);
});


module.exports = router;