const { response } = require("express");

//importacion del modulo Usuario.js
const Usuario = require("../models/Usuario");
//paquete para encriptar contraseñas
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

/*REGISTRAR  USUARIO */
const crearUsuario = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    //Verificar el email

    const usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe un usuario con ese email",
      });
    }

    //Crear usuario con el modelo

    const dbUser = new Usuario(req.body);

    //Hashear la contraseña
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);
    //Generar el JWT

    const token = await generarJWT(dbUser.id, name, email);

    //Crear el usuario de base de datos
    await dbUser.save();
    //Generar respueta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
      email,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador ",
    });
  }
};

/*LOGIN */

const loginUsuario = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    //validar si existe el email
    const dbUser = await Usuario.findOne({ email });

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "El email no es valido",
      });
    }

    //confirmar si el password hace match

    const validarPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validarPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña no es valida",
      });
    }

    //Generar el JWT

    const token = await generarJWT(dbUser.id, dbUser.name, dbUser.email);

    //Respuesta del servicio
    return res.json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

/*Revalidar token*/
const revalidarToken = async (req, res = response) => {
  const { uid } = req;

  //Leer la base de datos
  const dbUser = await Usuario.findById(uid);



  //Generar el JWT

  const token = await generarJWT(uid,dbUser.name);

  return res.json({
    ok: true,
    uid,
    name:dbUser.name,
    email:dbUser.email,
    token,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
