const jwt = require("jsonwebtoken");




const generarJWT = (uid, name) => {
  const payLoad = { uid, name };
  return new Promise((resolve, reject) => {
    jwt.sign(
      payLoad,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "10m",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
