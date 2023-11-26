import express, { Router } from "express";
import userRouter from "./user/user.routes";
import startupRouter from "./startup/startup.routes";
import { tokenVerification } from "../middleware/session";

const mainRouter:Router = express.Router();

// main user route
mainRouter.use("/user/",userRouter);

// main startup router
mainRouter.use("/startup/",tokenVerification,startupRouter);

// export module
export default mainRouter;