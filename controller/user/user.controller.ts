import { Request, Response } from "express"
import { tokenSigning } from "../../middleware/session";
import db from "../../db/config.db";
import { RowDataPacket } from "mysql2";



// user registration handler
export const userRegistration = (req: Request, res: Response) => {
    const user_data: string[] = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.password
    ]
    // db query
    db.query("INSERT INTO user(fname,lname,email,password) VALUES(?,?,?,?)", user_data, (err) => {
        if (!err) {
            res.status(200).json({ message: `User registered successfully`, data: user_data });
        } else {
            res.status(401).json({ message: `Fail to register user`, reason: err });
        }
    });

};


export const userLogin = (req: Request, res: Response) => {

    const credential: string[] = [
        req.body.email,
        req.body.password
    ];


    // db query
    db.query("SELECT * FROM user WHERE email=? AND password=?", credential, (err, result: RowDataPacket[]) => {
        if (!err && result.length > 0) {
            const payload: {} = {
                id: result[0]?.id,
                email: result[0]?.email,
            }

            const token = tokenSigning(payload)
            res.status(200).json({ message: "User Login successfully", toks: token });
        } else {
            res.status(403).json({ message: "User fail to login" });
        }
    })

};