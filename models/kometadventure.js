import mongoose, { Schema } from "mongoose";

const kometadventureSchema = new Schema(
    {
        title: String,
        description: String,
        price: String,
        discount: String,
        discountPercent: Number
    },
    {
        timestamps: true,
    }
)

const Kometadventure = mongoose.models.Kometadventure || mongoose.model("Kometadventure", kometadventureSchema);

export default Kometadventure;