const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config/.env" });

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log("Connection Successful");
    })
    .catch((error) => {
      console.log(`${error} does not connect`);
    });
};

module.exports = connectDatabase;
