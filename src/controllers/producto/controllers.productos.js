const PRODUCTO = require("../../model/producto/producto");
const moment = require("moment");
require("moment/locale/es");
const ctrls = {};
const fs = require("fs")

const hoy = moment().format("YYYY-MM-DD");

ctrls.allProductos = async (req, res) => {
  const data = await PRODUCTO.find().sort({date:1})
  res.json({ data });
};

ctrls.createProduct = async (req, res) => {
  try {
    const { 
      num,   
      marca,
      modelo,
      ano,
      color,  
      shasis, 
      transmicion,
      cilin,
      traccion,
      description,
      price,
      stock,} = req.body;

    console.log("shasis : ", shasis);
    const newShasis = await PRODUCTO.findOne({ shasis: shasis });
    console.log("new shasis : ", newShasis);
    if (newShasis) {
      return res.json({
        message: "error",
        body: "product/name-already-in-use",
      });
    }
   
   

    const data = new PRODUCTO({
      num,
      filename: req.file.filename,
      path: "/products/" + req.file.filename,
      marca,
      modelo,
      ano,
      color,  
      shasis, 
      transmicion,
      cilin,
      traccion,
      description,
      price,
      stock,
      date: hoy,

  
      
    });
    await data.save();
    return res.json({
      message: "success",
      body: data,
    });
  } catch (error) {
    console.log("entro a este error")
    return res.json({
      message: "error",
      body: error,
    });
  }
};

ctrls.findForCode = async (req, res) => {
  try {
    const data = await PRODUCTO.findOne({ code: req.params.code });
    res.json({
      message: "success",
      body: data,
    });
  } catch (error) {
    res.json({
      message: "error",
      body: error,
    });
  }
};

ctrls.deleteProduct = async (req, res) => {
  try {
   const deletes =  await PRODUCTO.findByIdAndDelete({ _id: req.params.id }).where({stock:0});
   if(deletes){
    return res.json({
      message: "success",
    })
  }else{
    return res.json({
      message: "error",
      body:"error/with-stock"
    })
  };
  } catch (error) {
    return res.json({
      message: "error",
      body: error,
    });
  }
};

ctrls.updateProduct = async (req, res) => {
  const {  
    num, 
    marca,
    modelo,
    ano,
    color,  
    shasis, 
    transmicion,
    cilin,
    traccion,
    description,
    price, 
    notify } = req.body;
  if (notify == "sku_name") {
    console.log("entrando en sku_name");
    const skus = await PRODUCTO.findOne({ sku: sku });
    if (skus) {
      return res.json({
        message: "error",
        body: "product/sku-already-in-use",
      });
    }

    
    
  
  }

 


  try {
    const data = await PRODUCTO.findOneAndUpdate(
      { _id: req.params.id },
      {
    num, 
    marca,
    modelo,
    ano,
    color,  
    shasis, 
    transmicion,
    cilin,
    traccion,
    description,
    price, 
      },
      { new: true }
    );

    return res.json({
      message: "success",
      body: data,
    });
  } catch (error) {
    return res.json({
      message: "error",
      body: error,
    });
  }
  
};


ctrls.updateProductStock = async (req, res) => {
  try {
    const { stock } = req.body;

    const data = await PRODUCTO.findByIdAndUpdate(
      { _id: req.params.id },
      {
        stock,
      },
      { new: true }
    );

    return res.json({
      message: "success",
      body: data,
    });
  } catch (error) {
    return res.json({
      message: "error",
      body: error,
    });
  }
};

ctrls.updateProductImage = async (req, res) => {
  try {
    // const imageaa = await PRODUCTO.findOne({ _id: req.params.id})
    // const a = imageaa.path
    //  fs.unlinkSync(a[0])
    const data = await PRODUCTO.findByIdAndUpdate(
      { _id: req.params.id },
      
      {
        filename: req.file.filename,
        path: "/products/" + req.file.filename,
      },
      { new: true }
    );

    return res.json({
      message: "success",
      body: data,
    });
  } catch (error) {
    return res.json({
      message: "error",
      body: error,
    });
  }
};
module.exports = ctrls;
