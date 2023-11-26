import * as jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";

// token signing
export const tokenSigning = (payload:{})=>{
    const secret = process.env.JWT_KEY;
    const token = jwt.sign(payload,secret!);
    return token;
}

// signature/token verification
export const tokenVerification = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.token as string;
    const secret = process.env.JWT_KEY as string;

    jwt.verify(token,secret,(err,data)=>{
        if(!err){
            (req as jwt.JwtPayload).user = data;
            next();
        }else{
            res.status(403).json({message:"Forged Token", err:err});
        }
    });

    
}