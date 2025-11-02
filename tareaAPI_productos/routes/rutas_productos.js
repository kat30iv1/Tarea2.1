import { Router } from 'express';

import {
    getById,
    searchByQuery as search,
    getDatos,
    create,
    updateProducto,
    deleteProducto,
    getProductosDisponibles
} from '../controllers/ctrls_productos.js';

const productRouter = Router();

productRouter.get('/', (req, res) => {
    getDatos(req, res);
})

productRouter.get('/search', search);
productRouter.get('/disponibles',  getProductosDisponibles);
productRouter.get('/:id', getById);
productRouter.post('/', create);
productRouter.put('/:id', updateProducto);
productRouter.delete('/:id', deleteProducto);

export default productRouter;