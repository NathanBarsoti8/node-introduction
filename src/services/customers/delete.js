const Customers = require('../../schemas/customers');
const Phones = require('../../schemas/phones');

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'need to send customer id' });

    const customers = await Customers.findByPk(req.params.id, {
        include: [{
            model: Phones,
            as: 'phones',
            attributes: ['id', 'customerId'],
            required: false
        }]
    })

    if (customers) {
        if (customers.phones && customers.phones.length) {
            for (const ph of customers.phones) {
                await Phones.update({
                    isActive: 0
                }, {
                    where: {
                        id: ph.id
                    }
                })
            }
        }
    
        Customers.update({
            isActive: 0
        }, {
            where: {
                id: customers.id
            }
        })

        return res.status(200).json({ message: 'customer deleted' })
    }
    else 
        return res.status(404).json({ message: 'customer not found' })
}