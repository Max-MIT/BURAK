import Errors, { HttpCode, Message } from "../libs/Errors";
import { Produc, ProductInput } from "../libs/types/products";
import ProductModel from "../schema/Product.model";

class ProductServise {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }
     
    
    /** SPA */
     /** SSR */

public async creatNewProduct(input: ProductInput): Promise<Produc> {
    try {
        return await this.productModel.create(input);
    } catch (err) {
      console.error("Error, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
}

}

export default ProductServise;