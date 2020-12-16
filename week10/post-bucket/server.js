const express = require("express");
const cors    = require("cors");
const port    = 8000;
const app     = express();
const cookies = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookies()); // maybe the order matters? so keep this one lastS

require("./server/config/mongoose.config");
require("./server/routes/user.route")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));