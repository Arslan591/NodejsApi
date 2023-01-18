const mongoose = require("mongoose");
require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 5000,
  },
};
module.exports = config;
// const connenctDB = (uri) => {
//   console.log("Hello");
//   return mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// module.exports = connenctDB;
