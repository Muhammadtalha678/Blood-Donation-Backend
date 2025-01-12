import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import authRoutes from './routers/auth.router.js'
import cors from 'cors'
import dbConnect from './dbConnection/dbConnection.js'
import sendResponse from './helper/sendResponse.js'

const app = express()


app.use(express.json())
app.use(cors("*"))

app.get('/', (req,res) => {
    res.send("Hello world")
})

app.use('/auth',authRoutes)



dbConnect()
    .then(() => {
        console.log('Database connected successfully.')
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
.catch((e) => console.log(e))
