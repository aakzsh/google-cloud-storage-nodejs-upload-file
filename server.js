const cors = require("cors");
const express = require("express");
const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.get('/',function(req,res){  
  res.sendFile(__dirname + "/public/index.html");  
});  

const port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
