// Estructura del CRUD
const router = require("express").Router(); // indicamos que de express queremos el router
// Esas son referencia a mi controlador  de /controllers/
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
} = require("../controllers/solicitudes");

router.get("/", obtenerSolicitud);
router.post("/", crearSolicitud);
router.put("/:id", modificarSolicitud);
router.delete("/:id", eliminarSolicitud);

module.exports = router;

// aqui van las rutas que te mandan a las peticiones del usuario al controlador, la idea es que de esas rutas te mande la api dependiendo de loq ue pida el usuario
