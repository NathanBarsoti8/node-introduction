const Customers = require('../../schemas/customers');
const Phones = require('../../schemas/phones');

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'need to send customer id' });

    const customers = await Customers.findOne({
        attributes: ['id', 'name', 'isActive'],
        include: [{
            model: Phones,
            as: 'phones',
            attributes: ['id', 'ddd', 'phone', 'customerId', 'isActive'],
            required: false
        }],
        where: {
            id: req.params.id,
        }
    })

    if (!customers)
        return res.status(404).json({ message: 'customer not found' })

    return res.status(200).json(customers);

}