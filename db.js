const mongoose  = require('mongoose');

/*const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};*/


const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@triki.qdj48.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString,/*options,*/ errrorMongoHandler)

function errrorMongoHandler(err){
    if (err){
        console.log("error ocurrio" + err);
    } else {
        console.log("Se conecto a la BD");
    }
}