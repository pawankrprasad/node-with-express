const myLogger =(req, res, next) => {
    console.log("Header", req.headers)
    console.log("Request Body ", req.body)
    res.send("Service is down");
    //next();
}

module.exports = myLogger;



