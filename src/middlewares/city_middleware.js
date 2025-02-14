const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require("../utils/common")
function validateCreateRequest(req,res,next){
    if(!req.body.name){;
        ErrorResponse.message = "Invalid Data"
        ErrorResponse.error = {
            message: "You must provide a name"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports ={
    validateCreateRequest
}