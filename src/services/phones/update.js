const Phones = require('../../schemas/phones');

async function update(phones, customerId) {

    if (!customerId)
        return "need to send customerId"

    if (phones.length) {
        for (const phone of phones) {
            if (phone.id) {
                Phones.update({
                    ddd: phone.ddd,
                    phone: phone.phone,
                    customerId: customerId
                }, {
                    where: {
                        id: phone.id
                    }
                })
            }
            else {
                Phones.create({
                    ddd: phone.ddd,
                    phone: phone.phone,
                    customerId: customerId
                })
            }
        }
    }
}

module.exports = {
    update
}