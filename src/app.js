const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is connected successfully',
    })
})

// handling errors

module.exports = app;