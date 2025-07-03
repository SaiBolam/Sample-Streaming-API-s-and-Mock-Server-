const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const streamController = require('../controllers/streamController');

router.use(auth);
router.get('/', streamController.getAllStreams);
router.post('/', streamController.createStream);
router.get('/:id', streamController.getStreamById);
router.post('/:id/start', streamController.startStream);
router.post('/:id/stop', streamController.stopStream);
router.get('/:id/health', streamController.getStreamHealth);

module.exports = router;
