const {Schema, model} = require("mongoose")
const schemaProducto = new Schema({
    num:Number,
    filename:String,
    path:String,
    marca:String, 
    modelo:String,
    ano:Number, 
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