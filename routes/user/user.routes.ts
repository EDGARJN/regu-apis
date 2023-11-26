import express, { Router } from "express";
import { userLogin, userRegistration } from "../../controller/user/user.controller";

const userRouter:Router = express.Router();

// route to user registration handler
userRouter.post("/reg",userRegistration);

// route to user authentication handler
userRouter.post("/auth",userLogin);

export default userRouter;
