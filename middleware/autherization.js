const authorizationMiddleware = (permission) => {
    return (req, res, next) => {
        console.log("Require permission ", permission);
        console.log("req.userContext", req.userContext)
        const userPermissioins = req.userContext.permission;
        if(userPermissioins.includes(permission)){
            next();
        }else{
            res.status(401).send({error: 'User is not authorized to perform this action'});
        }
       
    }
}

module.exports = authorizationMiddleware;



