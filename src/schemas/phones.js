const { Model, DataTypes } = require('sequelize');

class Phones extends Model {
    static init(sequelize) {
        super.init({
            ddd: DataTypes.STRING,
            phone: DataTypes.STRING,
            customerId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Customers, {
            foreignKey: 'customerId',
            as: 'customers'
        })
    }
}

module.exports = Phones;