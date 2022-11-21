const Ilustracion = require("../models/ilustraciones.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let ilustracion = new Ilustracion({
    id_novio: req.body.id_novio,
    nombre: req.body.nombre,
    estatura: req.body.estatura,
    complexion: req.body.complexion,
    edad: req.body.edad,
    contacto: req.body.contacto,
    etnia: req.body.etnia,
    nacionalidad: req.body.nacionalidad,
  });

  ilustracion.save(function (err) {
    if (err) {
      (console.log = false),
        (response.exito = false),
        (response.msg = "Error al guardar el ilustracion");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El ilustracion se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Ilustracion.find(function (err, ilustraciones) {
    res.json(ilustraciones);
  });
};

exports.findOne = function (req, res) {
  Ilustracion.findOne({ _id: req.params.id }, function (err, ilustracion) {
    res.json(ilustracion);
  });
};

exports.update = function (req, res) {
  let ilustracion = {
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
  };

  Ilustracion.findByIdAndUpdate(req.params.id, { $set: ilustracion }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el ilustacion");
      response.json(response);
      return;
    }

    (response.exito = true), (response.msg = "El ilustracion modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Ilustracion.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el ilustracion");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El ilustracion eliminado correctamente");
    res.json(response);
  });
};
