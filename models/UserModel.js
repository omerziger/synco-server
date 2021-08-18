const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullName: {
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
        validate: {
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
          required: [true, 'User phone number required']
        
    },
    
});
module.exports = mongoose.model('User', UserSchema);