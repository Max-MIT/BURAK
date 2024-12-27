import mongoose, { Schema } from "mongoose";
import { 
    ProductCollection, 
    ProductSize, 
    ProoductStatus,
    ProductVolume,
 } from "../libs/enums/product.enum";

const productSchema = new Schema(
    {
        prooductStatus: {
            type: String,
            enum: ProoductStatus,
            default: ProoductStatus.PAUSE,
        },

        productCollection: {
            type: String,
            enum: ProductCollection,
            required: true,
        },

        productName: {
            type: String,
            required: true,
        },

        productPrice: {
            type: Number,
            required: true,
        },

        productLeftCount: {
            type: Number,
            required: true,
        },

        prooductSize: {
            type: String,
            enum: ProductSize,
            default: ProductSize.NORMAL,
        },

        prooductVolume: {
            type: Number,
            enum: ProductVolume,
            default: ProductVolume.ONE,
        },

        productDesc: {
            type: String,
        },

        productImages: {
            type: [String],
            default: []
        },

        productViews: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true } // updatedAt, createdAt
);
    
productSchema.index(
    { productName: 1, productSize: 1, productVolume: 1 },
    { unique: true }
);
export default mongoose.model("Product", productSchema);
