
const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', { 
  id: {
    primaryKey: true,  
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING      
  },
  password: {
    type: Sequelize.STRING
  },
});

// User.sync().then(() => {
//   console.log('table created');
// });
module.exports = User;