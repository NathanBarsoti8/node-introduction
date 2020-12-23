const Customers = require('../../schemas/customers');
const Phones = require('../../schemas/phones');
const {
    Op
} = require('sequelize');

module.exports = async (req, res) => {

    let params = [];
    let paramsPhones = [];

    let size = req.query.size ? parseInt(req.query.size) : 10;
    let page = req.query.page ? parseInt(req.query.page) : 1;

    req.query.isActive == 'false' ? params.push({
        isActive: 0
    }) : params.push({
        isActive: 1
    })

    req.query.name ? params.push({
        name: {
            [Op.like]: `%${req.query.name}%`
        }
    }) : null;

    req.query.phoneNumber ? paramsPhones.push({ phone: { [Op.like]: `%${req.query.phoneNumber}%`} }) : null

    const customers = await Customers.findAndCountAll({
        attributes: ['id', 'name', 'isActive'],
        offset: (page - 1) * size,
        limit: size,
        order: [
            ['name', 'ASC']
        ],
        include: [{
            model: Phones,
            as: 'phones',
            attributes: ['id', 'ddd', 'phone', 'customerId', 'isActive'],
            required: paramsPhones.length ? true : false,
            where: {
                [Op.and]: paramsPhones
            }
        }],
        where: {
            [Op.and]: params
        }
    })

    if (customers.rows.length == 0)
        return res.status(404).json({
            message: "not found customers"
        })

    return res.status(200).json({
        "content": customers.rows,
        "pageable": {
            "pageNumber": page,
            "pageSize": size
        },
        "totalPages": Math.ceil(customers.rows.length / size),
        "totalElements": customers.rows.length,
        "last": Math.ceil(customers.count / size) == page ? true : false,
        "size": size,
        "first": page == 1 ? true : false,
        "numberOfElements": customers.rows.length,
        "empty": customers.rows == 0 ? true : false
    });
}