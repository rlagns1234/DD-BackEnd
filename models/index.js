const Sequelize = require('sequelize');
const env = process.env.NODE_ENV  || 'development';
const config = require('../config/config.js')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// export default db;
module.exports = db
