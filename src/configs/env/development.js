const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    const port = process.env.PORT || 3000;

    app.set('port', port);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}