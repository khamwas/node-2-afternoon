require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const pc = require("./controllers/products_controller");
const port = 4000;

var app = express();

app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/products", pc.getAll);
app.get("/api/products/:id", pc.getOne);
app.post("/api/products", pc.create);
app.put("/api/products/:id", pc.update);
app.delete("/api/products/:id", pc.delete);

app.listen(port, () => {
  console.log(`port ${port} is listening...`);
});
