console.log("inside of server.js");

const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

require("./server/config/mongoose.config");
require("./server/routes/cars.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));