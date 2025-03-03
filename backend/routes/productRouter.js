import express from 'express';
import {
  addProduct,
  removeProduct,
  getSingleProduct,
  getListProducts,
} from '../controllers/productController.js';
import upload from '../middlewares/multer.js';
import adminAuth from '../middlewares/adminAuth.js';

const productRouter = express.Router();

// /api/product
productRouter.get('/list', getListProducts);

// /api/product
productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

// /api/product/remove
productRouter.post('/remove', adminAuth, removeProduct);

// /api/product/single
productRouter.post('/single', getSingleProduct);

export default productRouter;
