const express = require('express');
const router = express.Router();
const file = require('./fileController');

router.get('/', file.get);
router.get('/:id', file.getId);


// router.post('/register', function(req, res, next) {
//   res.send('rutausuariosssss');
// });

module.exports = router;