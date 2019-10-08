const express = require("express");
const controller = require("./controller");

const app = express();

app.get("/api/evens", controller.getEvensArray)

app.listen(5050, () => console.log("Listening on Port 5050"));