const express = require('express');
const router = express.Router();

router.post('/validate', (req, res) => {
    res.json({
        message: "Success",
        user: req.body.name
    });
});

module.exports = router;