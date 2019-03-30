const express = require('express');
const PORT = process.env.PORT || 5003;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/scripts')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/main', (req, res) => res.render('pages/main1'));
app.listen(PORT);