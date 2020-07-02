const express = require('express');
const app = express();
require('./db/mongoose');

const userRouter = require('./routes/user')


app.use(express.json());
app.use(userRouter);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server is up on port' + port);
})