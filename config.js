const express = require('express');
module.exports = function (app) {

    const path = require('path');
    app
        .set('view engine', 'ejs')
        .set('views', path.join(__dirname, '/views'))
        .use(express.static(__dirname + '/'))
        .use(express.urlencoded({
            extended: true
        }))
        .use(express.json());
    require('./routes/routes')(app);
}