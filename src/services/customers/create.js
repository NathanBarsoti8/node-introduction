const Customers = require('../../schemas/customers');
const Sequelize = require('sequelize');

module.exports = async (req, res) => {

    req.body.isActive = 1;

    Customers.create(req.body).then(customer => {
        if (customer) {
            return res.status(201).json({ message: 'customer created' })
        }
    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })

}