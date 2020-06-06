const express = require('express');
const router = require('express-promise-router')();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();
const sql_helper = require('./helpers/sql-helper');

const app = express();

app.use('/', router);

router.get('/ping', ping);


async function ping(req, res)
{
    console.log("Ping is okay!");
    console.log("Request from", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    res.status(200).json({message: 'pong'})
}

const start = function(callback) {
    app.listen(process.env.API_PORT || 1000, function () {
        console.log(`API service is listening on port ${this.address().port}`);
        if (callback) {
            callback();
        }
    })
}

module.exports = {
    start
}