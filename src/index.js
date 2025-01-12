import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import authRoutes from './routers/auth.router.js'
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cors("*"))

app.get('/', (req,res) => {
    res.send("Hello world")
})
let connection = mongoose.connect(process.env.MONGO_URI).then(() => {console.log('db Connected')}).catch((e) => console.log("e => ", e)
)

app.use('/auth',authRoutes)

app.listen(process.env.PORT, () => {
    console.log('server running on port' + process.env.PORT);
    connection
})