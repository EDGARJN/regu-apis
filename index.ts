// team lead
import express, { Application,Request, Response } from "express";
import "dotenv/config"
import mainRouter from "./routes/routes";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// main application route
app.use("/api/",mainRouter)

// port
const PORT = process.env.PORT;
// start server
app.listen(PORT,()=>{console.log(`Server Listenning on port: ${PORT}`)})
