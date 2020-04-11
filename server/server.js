require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLBD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;
    console.log("Conexion Correcta Online");
});

//-------------------------------------------------------------------
//  ESTOS SON PARA LOS WARNING QUE SALEN COMO MENSAJE EN LA CONSOLA
//--------------------------------------------------------------------
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
//---------------------------------------------------------------------
//---------------------------------------------------------------------



app.listen(puerto, () => {
    console.log("Escuchando el Puerto ", puerto);
});