const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://plastikaDB:plastikaMONGOdb@cluster0.xnzdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected!");
});

module.exports = mongoose;
