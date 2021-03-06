'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		return Promise.all([

			await queryInterface.createTable('Customers', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true
				},
				name: {
					type: Sequelize.STRING(30),
					allowNull: false
				},
				isActive: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
					defaultValue: 1
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false
				}
			}),

			await queryInterface.createTable('Phones', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true
				},
				ddd: {
					type: Sequelize.STRING(3),
					allowNull: false
				},
				phone: {
					type: Sequelize.STRING(9),
					allowNull: false
				},
				customerId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					refereces: {
						model: 'Customers',
						key: 'id'
					}
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false
				}
			})

		])

	},

	down: async (queryInterface, Sequelize) => {
		return Promise.all([
			await queryInterface.dropTable('Phones'),
			await queryInterface.dropTable('Customers')
		])
	}
};