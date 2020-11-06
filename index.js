const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/',require('./routes/user.route'));

app.listen(port, () => {
    console.log('Port running on ' + port);
});