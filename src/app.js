const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const multer = require("multer")
const path = require("path")
const { v4: uuidv4 } = require('uuid');


//setting
app.set("port", process.env.PORT || 3000)


//multer
app.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
    destination : path.join(__dirname, 'public/products'),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, uuidv4() + path.extname(file.originalname));
    }
}) 
// end multer

app.use(multer({
    storage:storage,
    dest: path.join(__dirname, 'public/products')
 }).single('image'));// filena
//middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//router


//user
app.use("/api/user/", require("./router/user/router.user"))
//productos
app.use("/api/product", require("./router/producto/router.producto"))
//sale
app.use("/api/sale", require("./router/sale/router.sale"))
//client
app.use("/api/client", require("./router/client/router.client"))
//invoice
app.use("/api/invoice", require("./router/invoice/router.invoice"))



//static files
app.use(express.static(path.join(__dirname, "public")))

module.exports = app