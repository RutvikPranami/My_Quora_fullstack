const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser"); // accept JSON data and transfer into ROW data
const PORT = 80;
const db = require("./db");
const router = require("./routes");

//database connection

db.connect();

//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*"); // accessible from anywere
  req.header("Access-Control-Allow-Headers", "*");
  next(); // passe to the next callback function
});

//r

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../Frontend/build")));
app.use(express.static(path.join(__dirname, "./Frontend/build")));

//it will serve the Frontend build file - if we are accessing from any  routes.
//it will handshake the frontend and backend - so than frontend and backend can comunicate from different different host to one single machine.
app.get("*", (req, res) => {
  try {
    // res.sendFile(path.join(`${__dirname}/../Frontend/build/index.html`));
    res.sendFile(path.join(`${__dirname}./Frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! Unexpected error....");
  }
});

app.use(cors());

//server-Listen

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listen on port no :- ${PORT}`);
});
