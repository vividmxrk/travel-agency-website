const express = require('express');
const auth = require('../middleware/auth');
const createCrudRoutes = require('./crudFactory');
const { Package, Booking, Gallery, Blog, Offer, Enquiry, Car } = require('../models/BaseModels');

const router = express.Router();
router.use('/auth', require('./auth'));
router.use('/packages', createCrudRoutes(Package, { authMiddleware: auth }));
router.use('/bookings', createCrudRoutes(Booking, { protectWrite: false, authMiddleware: auth }));
router.use('/gallery', createCrudRoutes(Gallery, { authMiddleware: auth }));
router.use('/blog', createCrudRoutes(Blog, { authMiddleware: auth }));
router.use('/offers', createCrudRoutes(Offer, { authMiddleware: auth }));
router.use('/enquiry', createCrudRoutes(Enquiry, { protectWrite: false, authMiddleware: auth }));
router.use('/cars', createCrudRoutes(Car, { authMiddleware: auth }));

module.exports = router;
