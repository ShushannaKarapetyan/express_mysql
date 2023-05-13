const express = require('express');
const app = express();
const {sequelize, authenticate} = require('./database/mysql');
const router = require('./routes/router');
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

    authenticate();
})