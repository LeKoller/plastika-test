const express = require("express");
const mongoose = require("../database");
const { create } = require("../controllers/usersControllers");

// const mongo = require("mongodb");
const router = express.Router();

// get user
// router.get("/", async (req, res) => {
//   const users = await loadUsersCollection();
//   res.send(await users.find({}).toArray());
// });

router.post("/register", create);

// create user

// login user

////

// async function loadUsersCollection() {
//   const client = await mongo.MongoClient.connect(
//     "mongodb+srv://plastikaDB:plastikaMONGOdb@cluster0.xnzdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );

//   return client.db("plastika").collection("users");
// }

module.exports = router;
