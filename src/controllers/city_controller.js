const {StatusCodes} = require("http-status-codes");
const {CityService} = require("../services");
const { error } = require("winston");
const {ErrorResponse,SuccessResponse} = require("../utils/common")

async function createCity(req,res){
    try{
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
       
    }
}

module.exports ={
    createCity
}