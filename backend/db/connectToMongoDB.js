
import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://adarshsingh8853757189:hxoTKN1CtE1xWkn4@cluster0.whvuzdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToMongoDB;