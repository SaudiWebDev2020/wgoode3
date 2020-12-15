const express = require("express");
const cors    = require("cors");
const port    = 8000;
const app     = express();
const cookies = require('cookie-parser');

app.use(cookies());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

require("./server/config/mongoose.config");
require("./server/routes/user.route")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));