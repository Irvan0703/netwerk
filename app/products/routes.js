const router = require('express').Router();

const { isAuthenticated } = require('../../middleware/auth');
const productController = require('./controller');

router.post('/products',
    isAuthenticated,
    productController.store
);
router.get('/products',
    isAuthenticated,
    productController.index
);
router.put('/products/:id',
    isAuthenticated,
    productController.update
);
router.delete('/products/:id',
    isAuthenticated,
    productController.destroy
);

module.exports = router;