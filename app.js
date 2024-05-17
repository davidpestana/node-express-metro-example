const express = require('express');

let app = express();
app.use(express.json());
// app.use((req,res,next) => {
//    console.log(req.params);
//    console.log(req.query);
//    next();
// })
module.exports = app;