const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = require("./app");

const port = process.env.PORT || 3005;
const mongo_uri = process.env.MONGO_URL;

async function start() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
