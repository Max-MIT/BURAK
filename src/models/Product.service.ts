import ProductModel from "../schema/Product.model";

class ProductServise {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }
}

export default ProductServise;