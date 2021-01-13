module.exports = {
    development: {
        dialect: 'mysql',
        host: 'bxcznacn4bhhqnrr3i7n-mysql.services.clever-cloud.com',
        username: 'ux3ap6twsxvzq0uj',
        port: 3306,
        password: 'oVAnQqgKm0MnNcWFQwLL',
        database: 'bxcznacn4bhhqnrr3i7n',
        logging: false,
        define: {
            freezeTableName: true,
            timestamps: true,
            undescored: false
        }
    }
}

// development: {
//     dialect: 'mssql',
//     host: 'localhost',
//     port: 6400,
//     username: 'sa',
//     password: 'Node_introduction',
//     database: 'NodeIntroDB',
//     define: {
//         freezeTableName: true,
//         timestamps: true,
//         undescored: false
//     }
// }