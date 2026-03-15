const express = require('express');

module.exports = function createCrudRoutes(Model, { protectWrite = true, authMiddleware }) {
  const router = express.Router();
  router.get('/', async (_, res) => res.json(await Model.find().sort({ createdAt: -1 })));
  router.post('/', protectWrite ? authMiddleware : (_, __, next) => next(), async (req, res) => res.status(201).json(await Model.create(req.body)));
  router.put('/:id', authMiddleware, async (req, res) => res.json(await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })));
  router.delete('/:id', authMiddleware, async (req, res) => { await Model.findByIdAndDelete(req.params.id); res.json({ ok: true }); });
  return router;
};
