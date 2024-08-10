import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))   //extended true complex objexts ko store krne me madad krta hai
app.use(express.static("public"))
app.use(cookieParser())

//routes import

import userRouter from "./routes/user.routes.js"

//routes declarartion-> ab router ko lane ke liye middleware lana pdega
app.use("/api/v1/users", userRouter)   //jobhi yha milta hai wo prefix bn jta hai url ka fir wo registeruser pe chla jyga

// http://localhost:8000/api/users/register
export { app }