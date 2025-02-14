const {CityRepository} = require("../repositories");
const AppError = require("../utils/errors/app_error");
const {StatusCodes} = require("http-status-codes");


const cityRepository = new CityRepository();


async function createCity(data){
    try{
        const city = await cityRepository.create(data);
        return city;
    }catch(e){
    
        if(e.name == "SequelizeValidationError" || "SequelizeUniqueConstraitError"){
            let exp = [];
            e.errors.forEach((err)=>{
                exp.push(err.message);
            })
            console.log(exp);
            throw new AppError(exp,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

module.exports ={
    createCity
}