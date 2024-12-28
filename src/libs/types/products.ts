import { ObjectId } from "mongoose";
import { 
    ProductCollection, 
    ProductSize, 
    ProoductStatus,
 } from "../enums/product.enum";

 export interface Produc {
    _id: ObjectId;
    prooductStatus: ProoductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    prooductSize: ProductSize;
    prooductVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
 }

export interface ProductInput {
    prooductStatus?: ProoductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    prooductSize?: ProductSize;
    prooductVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    prooductStatus?: ProoductStatus;
    productCollection?: ProductCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    prooductSize?: ProductSize;
    prooductVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}