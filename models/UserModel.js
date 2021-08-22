const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required:[true, 'User must have a full name']
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 16,
        required:[true, "can't be blank"]
    },
    email:{
        type:String,
        validate:validator.isEmail()
    }
    
});
module.exports = mongoose.model('User', UserSchema);