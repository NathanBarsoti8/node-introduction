const Customers = require('../../schemas/customers');
const updatePhone = require('../phones/update').update;

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'need to send customer id' });

    Customers.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(customer => {

        if (customer) {
            

            if (req.body.phones && req.body.phones.length) 
                updatePhone(req.body.phones, req.params.id)

            return res.status(201).json({ message: 'customer updated' })
        }

    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })
}