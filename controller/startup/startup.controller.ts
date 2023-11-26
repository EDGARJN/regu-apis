import { Request, Response } from "express";
import {  JwtPayload } from "jsonwebtoken";
import db from "../../db/config.db";

// startup registration
export const startupReg = (req:Request, res:Response)=>{

    if((req as JwtPayload).user){

    const startup_data:string[] = [
        req.body.startup_name,
        req.body.founder,
        req.body.subcategory,
        req.body.description,
        (req as JwtPayload).user?.id
    ];

    db.query("INSERT INTO startup(st_name,founder,cat_id,description,created_by) VALUES(?,?,?,?,?)",startup_data,(err)=>{
        if(!err){
            res.status(200).json({message:"Startup registerd successfully", data:startup_data});
        }else{
            res.status(401).json({message:"Fail to regist a startup", reason:err});
        }
    });


}else{
    res.status(401).json({message:"Fail to regist a startup", reason:"User is not authenticated"});
}
};