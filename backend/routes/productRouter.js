import express from 'express';
import {
  addProduct,
  listProducts,
  removeProduct,
  getSingleProduct,
} from '../controllers/productController.js';
import upload from '../middlewares/multer.js';

const productRouter = express.Router();

// /api/product
productRouter.post(
  '/add',
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

// /api/product/:id
productRouter.post('/remove', removeProduct);

// /api/product/:id
productRouter.post('/single', getSingleProduct);

// /api/product
productRouter.get('/list', listProducts);

export default productRouter;
