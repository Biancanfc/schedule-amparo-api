const mongoose = require("mongoose");
const config = require("../config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
};

const uri = `${config.MONGODB_PROTOCOL}://${config.MONGODB_USER}:${config.MONGODB_PASS}@${config.MONGODB_HOSTPORT}/${config.MONGODB_DATABASE}?retryWrites=true&w=majority&authSource=admin`;

module.exports = () => {
  mongoose
    .connect(uri, options)
    .then(() => {
      console.log("mongo conectado!");
    })
    .catch((err) => {
      console.log(err);
      console.log("mongo não conectado");
    });

  return mongoose.connection;
};
