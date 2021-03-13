import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MONGODB_URI: any = process.env.MONGODB_URI

const options: any = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise,
    keepAlive: 1,
    connectTimeoutMS: 30000,
};

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI,
        options,
    );
}

export default connectDB
