import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('db connect Successfully');
        
    } catch (error) {
        console.log("error => ",error);
        
    }
}
export default dbConnect