const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}