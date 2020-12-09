const express = require("express");
const port = 8000;
const app = express();

// not going to use cors since not connecting to React
app.use(express.json());

require("./server/config/mongoose.config");
require("./server/routes/index.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));