var express = require('express');
var app = express();
require('dotenv').config();

app.use(express.static(__dirname + '/bundle/'));

// Any code that this file requires should come from /serverScripts
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 8000}`);
});
