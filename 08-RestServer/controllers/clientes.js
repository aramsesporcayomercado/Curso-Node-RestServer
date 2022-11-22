const { response } = require("express");

const clientesGet = (req, res = response) => {
  /* sirver para ponerle parametros o los querry como algo asi
  como una busqueda mas especifica como
  http://localhost:8080/api/clientes(del signo de interrogacion
  hasta los numeros es la query o busqueda especifica)?q=hola&nombre=arath&apikey=1234567

  */
  /* el page y limit sirven para indicar la paginacion page es el
  numero de paginas y el limit es la cantidad de paginas que tiene*/
  const { q, nombre = "no name bro", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const clientesPost = (req, res = response) => {
  /* los campos que esta ente corchetes son una pequeña validacion o filto
  para decir que solo me traiga dos cosas del body o de los campo pero solo se pueden traer dos
  campos nadamas y obviamente arriba en los corchetes creas la variables y le dice que traiga
  los campos y abajo lo pones para mostrarlos  y tambien se ponen en el put o en patch*/
  const { nombre, Juego } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    Juego,
  });
};

const clientesPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const clientesPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const clientesDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  clientesGet,
  clientesPost,
  clientesPut,
  clientesPatch,
  clientesDelete,
};
