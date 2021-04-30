const express = require("express");
const cors = require("cors");

const app = express();
const users = require("./routes/users");
const port = 5010;

app.use(express.json());
app.use(cors());
app.use("/api/users", users);

app.listen(port, () => console.log(`Server started on port ${port}`));
