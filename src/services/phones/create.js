const Phones = require('../../schemas/phones');

async function create(phones, customerId) {

    if (!customerId)
        return "need to send customerId"

    for (const phone of phones) {
        Phones.create({
            ddd: phone.ddd,
            phone: phone.phone,
            customerId: customerId
        }).then(result => {
            if (result)
                return "phone created";
        }).catch(err => {
            return err.message;
        });
    }
}

module.exports = {
    create
}