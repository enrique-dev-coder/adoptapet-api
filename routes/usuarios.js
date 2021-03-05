// Estructura del CRUD
const router = require("express").Router(); // indicamos que de express queremos el router
// Esas son referencia a mi controlador  de /controllers/
const {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios");

router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/:id", modificarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;

// aqui van las rutas que te mandan a las peticiones del usuario al controlador, la idea es que de esas rutas te mande la api dependiendo de loq ue pida el usuario
