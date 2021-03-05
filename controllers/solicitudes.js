/*  Archivo controllers/solicitudes.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Solicitud = require("../models/Solicitud");

function crearSolicitud(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  //El new solicitud vien del objeto
  var solicitud = new Solicitud(req.body);
  res.status(201).send(solicitud);
}

function obtenerSolicitud(req, res) {
  // Simulando dos usuarios y respondiendolos
  var solicitud1 = new Solicitud(1, 1, "03-08-21", 1, 1, "Aceptada");
  var solicitud2 = new Solicitud(2, 2, "03-10-21", 2, 2, "Aceptada");
  res.send([solicitud1, solicitud2]);
}

function modificarSolicitud(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var solicitud1 = new Solicitud(
    req.params.id,
    4,
    "03-15-21",
    4,
    5,
    "Denengada"
  );
  var modificaciones = req.body;
  usuario1 = { ...solicitud1, ...modificaciones };
  res.send(solicitud1);
}

function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminado`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
};
