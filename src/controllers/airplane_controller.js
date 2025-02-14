const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require("../services");
const { error } = require("winston");
const {ErrorResponse,SuccessResponse} = require("../utils/common")


async function createAirplane(req,res){
    console.log(req.body);
    try{
        const airplane =await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
       
    }
}

async function getAllAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAllAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
       
    }
}

async function getAirplane(req,res){
    try{
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
    }
}

async function destroyAirplane(req,res){
    try{
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
    }
}

async function updateAirplane(req,res){
    try{
        const airplane = await AirplaneService.updateAirplane(req.params.id,req.params.body);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(e){
        ErrorResponse.error = e;
        return res.status(e.StatusCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}