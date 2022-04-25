require('dotenv').config();

var express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const middlewares = require('./middlewares');
const router = require('./routes');



const db = require('./db');


app.use(helmet())

//CORS
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*'); 
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(perimitirCrossDomain);

app.use(bodyParser.json());
app.use('/api', router);
app.use(morgan('tiny'));



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log('App eschando por puertop '+PORT);
});