import path from "path";
import multer from "multer";
import { v4 } from "uuid";

/** MULTER IMAGE UPLOADER **/
function getTargetImageStorage(address: any) {
   return multer.diskStorage({
      destination: function (req, file, cb) {
         cb(null, `./uploads/${address}`);
      },
      filename: function (req, file, cb) {
         const extension = path.parse(file.originalname).ext;
         const randon_name = v4() + extension;
         cb(null, randon_name);
      },
   });
}

const makeUploader = (adress: string) => {
   const storage = getTargetImageStorage(adress);
   return multer({ storage: storage });
};

export default makeUploader;
 



function cb(arg0: null, arg1: string) {
   throw new Error("Function not implemented.");
}
/*
const product_storage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, "./uploads/products");
  },
 filename: function (req, file, cb) {
    console.log(file);
    const extension = path.parse(file.originalname).ext;
    const randon_name = v4() + extension;
    cb(null, randon_name);
 },
});

export const uploadProductImage = multer({ storage: product_storage });
*/