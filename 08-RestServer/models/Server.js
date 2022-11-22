const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.clientesPath = "/api/clientes";

    //middelewares
    this.middelewares();

    // rutas de mi aplicacion
    this.routes();
  }
  /*este funciona para subirlo al publico
  tambien es para middelewares globales
  */
  middelewares() {
    /*aqui estas diciendo que publique o muestre lo que
        esta en la carpeta public, obviamente se publica en
  localhost:("el nombre de tu puerto")*/

    //CORS
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use(express.json());

    this.app.use(express.static("public"));
  }
  /* si quiero poner mas rutas deben ser aqui y como lo acabo de hacer
y si lo estas leyendo despues pues fue como lo hiciste ademas si no te
acuerdas ve los videos en udemy de curso de node
*/
  routes() {
    this.app.use(this.clientesPath, require("../routes/clientes"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
