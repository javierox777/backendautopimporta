const mongoose = require("mongoose")


//const URI ="mongodb+srv://javierInventariomarco:12345@cluster0.o7lva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const URI = "mongodb://127.0.0.1/autoimporta"
//const URI ="mongodb://root:pass@25.1.215.239/local"



mongoose.connect(URI,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const connections = mongoose.connection


connections.once("open",()=>{
    console.log("db is ok")
})