const {AirplaneRepository} = require("../repositories");
const AppError = require("../utils/errors/app_error");
const {StatusCodes} = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(e){
        if(e.name == "SequelizeValidationError"){
            let exp = [];
            e.errors.forEach((err)=>{
                exp.push(err.message);
            })
            console.log(exp);
            throw new AppError(exp,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new airplane object",StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


async function getAllAirplanes(){

    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }catch(e){
        throw new AppError("Cannot fetch data",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }catch(e){
        if(e.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane with that id exists",e.StatusCode)
        }
        throw new AppError("Cannot fetch data",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try{
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    }catch(e){
        if(e.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane with that id exists",e.StatusCode)
        }
        throw new AppError("Cannot delete data",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data){
    try{
        const airplane = await airplaneRepository.update(id);
        return airplane;
    }catch(e){
        if(e.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane with that id exists",e.StatusCode)
        }
        throw new AppError("Cannot delete data",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports ={
    createAirplane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}
