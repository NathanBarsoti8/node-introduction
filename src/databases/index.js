const Sequelize = require('sequelize');
const dbConfig = require('../configs/database');

//MODELS
const Customers = require('../schemas/customers');
const Phones = require('../schemas/phones');

const connection = new Sequelize(dbConfig.development);

Customers.init(connection);
Phones.init(connection);

Customers.associate(connection.models);
Phones.associate(connection.models);

