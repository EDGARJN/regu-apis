import * as sql from "mysql2";


const db = sql.createPool({
    host:process.env.DB_HOST,
    // port:process.env.DB_PORT,
    user:process.env.DB_USER,
    database: process.env.DB_NAME,
    password:process.env.DB_PASS
});

db.getConnection((err)=>{
    if(!err){
        console.log("DB connected successfully");
    }else{
        console.log(`Failed to connect db due to: ${err}`);
    }
});

export default db;

