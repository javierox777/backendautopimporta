const {Schema, model} = require("mongoose")
const schemaProducto = new Schema({
    num:String,
    filename:String,
    path:String,
    marca:String, 
    modelo:String,
    ano:String, 
    color:String, 
    shasis:String,
    transmicion:String,
    cilin:String,
    traccion:String,
    description:String,
    price:Number,
    stock:Number,
    date:String,


   
  
   
  
    


})



module.exports = model("productos", schemaProducto)