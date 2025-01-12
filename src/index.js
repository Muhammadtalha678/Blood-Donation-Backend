import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import authRoutes from './routers/auth.router.js'
import cors from 'cors'
import dbConnect from './dbConnection/dbConnection.js'

const app = express()


app.use(express.json())
app.use(cors("*"))

app.get('/', (req,res) => {
    res.send("Hello world")
})

app.use('/auth',authRoutes)


const startServer = async () => {
    try {
        // Step 1: Connect to the database
        await dbConnect();
        console.log('Database connected successfully.');

        // Step 2: Start the Express server
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        // Handle any critical errors during the startup process
        console.error('Error during application startup:', error.message);
        process.exit(1); // Exit the process with a failure code
    }
};

// Start the application
startServer();