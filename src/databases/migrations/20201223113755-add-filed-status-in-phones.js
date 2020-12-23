'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('phones', 'isActive', {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 1
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('phones', 'isActive')
	}
};