import express from "express";
import {getProduct, addProduct, updateProduct, deleteProduct, getProductById} from "../controllers/product.js";

const router = express.Router();

router.get('/', getProduct);
router.get('/:id', getProductById)
router.post('/', addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;