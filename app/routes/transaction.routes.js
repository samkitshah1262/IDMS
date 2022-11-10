const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();



const dbService = require('./dbService');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

