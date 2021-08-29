const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

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
    passwordConfirm: {
        type: String,
        required:[true, "The passwords must be the same"],
        validate:{
            validator:function(e){
                return this.password===e;
            }
        }
    },
    email:{
        type:String,
        validate:validator.isEmail()
    }
    
});

UserSchema.pre('save', async function (next) {
    
    if(this.isModified('password')){
    const rounds = 12; // What you want number for round paasword

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    this.passwordConfirm=undefined;
    }
    next()
  })
module.exports = mongoose.model('User', UserSchema);