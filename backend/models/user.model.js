const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:[5,'email should be 13 character long']
    }
});

const user= mongoose.model('user',userSchema);

module.exports = user;