const notFound = (req, res, next) => {
    res.status(404);
    console.log("usando el midelware notFound");
    const error=  new Error("ruta no encontrada " + req.originalUrl);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    console.log(res.statusCode)
    const statusCode = (res.statusCode != 200)? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: (process.env.NODE_ENV =='production')? 'aaaaaaaaaaaaaaaa' : err.stack
    });
};


module.exports = {
    notFound,
    errorHandler
};