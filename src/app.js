import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:["http://localhost:3000","https://ai-content-genim.vercel.app","http://localhost:5173","https://ai-generator-content-rbtq.vercel.app"],
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// ➕ Add a ping route to keep DB/server awake
app.get("/ping", (req, res) => {
    res.status(200).json({ success: true, message: "Server is live!" })
})

//routes import
import userRouter from './routes/user.route.js'
import paymentRouter from './routes/payment.route.js'
//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/payment", paymentRouter)


export { app }
