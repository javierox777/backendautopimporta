const {Schema,  model} = require("mongoose")

const schemaClient = new Schema({
    name:String,
    rut:String,
    date:String,
    phone:String,

})




module.exports = model("clients", schemaClient)