const express = require('express');
const path = require('path');

const app = express();

const env = 'development';
const envDir = path.join(__dirname, `./src/configs/env/${env}`);

require(envDir)(app);
require('./src/index')(app);
require('./src/databases');

app.listen(app.get('port'), () => {
    console.log(`API LISTENING ON PORT ${app.get('port')} `)
})