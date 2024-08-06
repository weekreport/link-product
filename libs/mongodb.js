import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://pjiadmin:b9gtHd8cqHwBUSuK@cluster0.fnshkxf.mongodb.net/product_db"
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;