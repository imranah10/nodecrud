import express from "express";
import { ConnectDb } from "./config/DB.js";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";
import router from "./routes/Router.js";
const app=express()
dotenv.config()
// middlewares 
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
const PORT=process.env.PORT || 3000
// db connection 
ConnectDb()
// defining routes 
app.use('/api',router)
app.get('/test',(req,res)=>{
    res.send('hello world')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
