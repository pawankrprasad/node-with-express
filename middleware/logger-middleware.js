const middleWareWrapper = (printLog) => {
    return (req, res, next) => {
        if(printLog){
            console.log("Header", req.headers)
            console.log("Request Body ", req.body)
        }
        next();
    }
}

module.exports = middleWareWrapper;



