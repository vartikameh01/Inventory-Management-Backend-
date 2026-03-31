import Joi from "joi";
import { StatusCodes } from "http-status-pro-js";

export function productMid(req,res,next){
    try{

        let schema = Joi.object({
            name:Joi.string().min(2).max(200).required().trim(),
            price:Joi.number().min(0).required(),
            stock:Joi.number().min(0).required()
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
        console.log("product mid",err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}
export function productUpdateMid(req,res,next){
    try{

        let schema = Joi.object({
            name:Joi.string().min(2).max(200).trim(),
            price:Joi.number().min(0),
            stock:Joi.number().min(0)
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
        console.log("product update mid",err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}