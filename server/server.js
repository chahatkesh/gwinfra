import express from 'express'
import cors from 'cors'
import { ConnectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'


// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
ConnectDB();

// api endpints
app.use("/api/user", userRouter)


app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})

