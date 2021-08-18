const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
        required:true
    },
    password: {
        type: String,
        minLength: 6,
        required:true
    },
    email:{
        type:String,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
});
module.exports = mongoose.model('User', UserSchema);