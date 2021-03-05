// variables de los modulos
var express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

// Objeto global de la app
var app = express();

// configuración de middlewares
// definimos que se va autlizar con el objeto de app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agregamos el código de nuestro router (routes/index.js)
// esto es para que entre a la ruta la aplicacion
app.use("/v1", require("./routes"));

// Manejando los errores 404
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
// le decimos el puerto que se utilizara
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Escuchando en el puerto " + server.address().port);
});

// 1.- creamos modelos con las clases
// 2.- por cada modelo creamos un controlador  con sus rutas del get post , delete
//3.- la idea es que
