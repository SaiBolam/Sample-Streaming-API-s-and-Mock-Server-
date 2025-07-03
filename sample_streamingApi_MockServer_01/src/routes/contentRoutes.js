const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const contentController = require('../controllers/contentController');

router.use(auth);
router.get('/', contentController.getAllContent);
router.get('/:id', contentController.getContentById);
router.post('/', contentController.createContent);
router.put('/:id', contentController.updateContent);
router.delete('/:id', contentController.deleteContent);

module.exports = router;
