const mongoose = require('mongoose')
let AdministratorCategory=new mongoose.Schema({

    
     country:{
        type:"String",

    },

})
module.exports=mongoose.model("AdministratorCategory",AdministratorCategory)