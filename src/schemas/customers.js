const { Model, DataTypes } = require('sequelize');

class Customers extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Phones, {
            foreignKey: 'customerId',
            as: 'phones'
        })
    }
}

module.exports = Customers;