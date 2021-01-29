const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    host: "localhost",
    user: "root",
    database: "users",
    password: "root"
});

app.set("view engine", "hbs");
