module.exports = {
    development: {
        dialect: 'mssql',
        host: 'localhost',
        port: 6400,
        username: 'sa',
        password: 'Node_introduction',
        database: 'NodeIntroDB',
        define: {
            freezeTableName: true,
            timestamps: true,
            undescored: false
        }
    }
}