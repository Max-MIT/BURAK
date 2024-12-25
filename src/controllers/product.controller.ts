import { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductServise from "../models/Product.service";

const productService = new ProductServise();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
      console.log("getAllProductsp"); 
      res.render("products");
      } catch (err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

  productController.creatNewProduct = async (req: Request, res: Response) => {
      try {
        console.log("creatNewProduct"); 
        } catch (err) {
          console.log("Error, creatNewProduct", err);
          if(err instanceof Errors) res.status(err.code).json(err);
          else res.status(Errors.standard.code).json(Errors.standard);
      }
    };

    productController.updateChosenProduct = async (req: Request, res: Response) => {
        try {
          console.log("updateChosenProduct"); 
          } catch (err) {
            console.log("Error, updateChosenProduct", err);
            if(err instanceof Errors) res.status(err.code).json(err);
            else res.status(Errors.standard.code).json(Errors.standard);
        }
      };
export default productController;
