const Customers = require('../../schemas/customers');
const createPhone = require('../phones/create').create;

module.exports = async (req, res) => {

    req.body.isActive = 1;

    Customers.create(req.body).then(customer => {
        if (customer) {

            if (req.body.phones && req.body.phones.length) 
                createPhone(req.body.phones, customer.id)

            return res.status(201).json({ message: 'customer created' })
        }
    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })

}