const app = require("./app")
require("./database")


const host = "192.168.0.2"


function main(){
    app.listen(app.get("port"))
    console.log("el servidor esta en el puerto :", app.get("port"))
}



main()