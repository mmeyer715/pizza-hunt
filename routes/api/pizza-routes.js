const router = require('express').Router();

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get()
    .post();


// Set up GET one, PUT, and DELETE at /api/pizza/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;