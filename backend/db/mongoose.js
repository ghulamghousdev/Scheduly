const mongoose = require('mongoose');

//CONNECTING TO DATABASE
mongoose.connect('mongodb://localhost:27017/user-rest-api', {useNewUrlParser: true, useUnifiedTopology: true});