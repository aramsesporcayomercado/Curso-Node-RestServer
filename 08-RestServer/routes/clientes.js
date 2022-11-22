const { Router } = require("express");
const { clientesGet } = require("../controllers/clientes");
const { clientesPut } = require("../controllers/clientes");
const { clientesPost } = require("../controllers/clientes");
const { clientesPatch } = require("../controllers/clientes");
const { clientesDelete } = require("../controllers/clientes");

const router = Router();
/*aqui estamos declarando la ruta del archivo para que en
        api muestre  hello word, que tambien se puede usar otro path pero
        pero por ahora asi esta bien ademas, va servir para crear mas rutas
        de accesso o endpoints para mostrar mas cosas*/
router.get("/", clientesGet);

router.post("/", clientesPost);

router.put("/:id", clientesPut);

router.patch("/", clientesPatch);

router.delete("/", clientesDelete);

module.exports = router;
