import Joi from "joi";
import { StatusCodes } from "http-status-pro-js";

export function userMid(req,res,next){
    try{
        let schema = Joi.object({
            name:Joi.string().min(3).max(200).required().trim(), 
            email:Joi.string().min(10).max(200).lowercase().email().required().trim(), 
            password:Joi.string().min(4).max(20).required().trim(),
        })

        const { error, value } = schema.validate(req.body);

        if(error){
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code:StatusCodes.BAD_REQUEST.code,
                message:StatusCodes.BAD_REQUEST.message,
                data:null
            })
        }

        req.body = value; 
        next();

    }catch(err){
        console.log("user reg mid",err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}