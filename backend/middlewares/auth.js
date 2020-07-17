const User = require('../db/models/user');
const jwt = require('jsonwebtoken');
//AUTHENTICATION MIDDLEWARE
const auth = async (req, res, next) => {
    try{
        const token = req.header('authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisisuserverification');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if(!user) {
            throw new Error('Please Authenticate');
        }
        req.user = user;
        req.token = token;
        next();
    } catch(e){
        res.status(400).send({error: 'Please Authenticate'});
    }
}

module.exports = auth;