module.exports = (app) => {
    app.use('/api/v1/customers', require('./routes/customers'));
}