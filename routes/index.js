var router = require("express").Router();
// cuando pedimos un get que termine  en / va a la version y empieza por ahi, esta definida en la v1 de app.js
// este es el modelo vista controlador, noe stamos viendo vistas
router.get("/", (req, res) => {
  res.send("welcome to adoptapet api");
});

router.use("/usuarios", require("./usuarios"));

//la ruta agarra el archivo del controlador
// y ese

/* con el método use de nuestro router estamos indicando
 * que en la ruta 'v1/usuarios' estarán anidadas las rutas
 * que vamos a crear en nuestro archivo usuarios.js,
 * la función require está importando este archivo */

// aqui agregamos la ruta para mascotas
// router viene de express
router.use("/mascotas", require("./mascota"));
// el primer /mascotas es lo que debe estar en el url para acceder

// agregamos la url de solicutes
router.use("/solicitud", require("./solicitudes"));

module.exports = router;
