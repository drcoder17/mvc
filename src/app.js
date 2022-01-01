const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = 3000 || process.env.PORT;

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, './views'));

app.listen(PORT, () => console.log(`Server is on ${PORT}`));
