const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require("../utils/common")
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){;
        ErrorResponse.message = "Invalid Data"
        ErrorResponse.error = {
            message: "Model number not found"
        }

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports ={
    validateCreateRequest
}