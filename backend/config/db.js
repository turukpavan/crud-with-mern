const mongoose= require('mongoose');
function connectToDB(){
    mongoose.connect('mongodb://0.0.0.0/CRUD').then(()=>{
        console.log('connected to DB');
        
    })
}

module.exports = connectToDB;