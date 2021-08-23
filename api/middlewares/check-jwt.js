var jwt = require("jsonwebtoken");

exports.checkJwt = async (req, res, next) => {
  await jwt.verify(
    req.headers.authorization,
    process.env.PRIVATE_KEY,
    (err, decoded) => {
      if (err) {
        // res.status(401).json("Failed to verify token");
        next();
      } else {
        req.user_id = decoded.uid;
        next();
      }
    }
  );
};
