const express = require('express');
const app = express()
const path = require('path');
const port = 3030;


app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about', (req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')));
app.get('/music', (req,res) => res.sendFile(path.join(__dirname, 'views', 'music.html')));

app.listen(port, () => console.log("servidor funcionando en http://localhost:" + port));

