import express,{ Router } from "express";
import { startupReg } from "../../controller/startup/startup.controller";

const startupRouter:Router = express.Router();

startupRouter.post("/basic-info",startupReg);

export default startupRouter;