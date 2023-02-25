const express = require('express');
const router = express.Router();
const file = require('./fileController');

router.get('/', file.get);
router.get('/:id', file.getId);
router.post('/', file.post);
router.put('/:id', file.put);



// router.post('/register', function(req, res, next) {
//   res.send('rutausuariosssss');
// });

module.exports = router;