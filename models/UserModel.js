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
        maxlength: 16,
        required:true
    },
    email:{
        type:String,
        validate:validator.isEmail('foo@bar.com')
    }
    
});
module.exports = mongoose.model('User', UserSchema);