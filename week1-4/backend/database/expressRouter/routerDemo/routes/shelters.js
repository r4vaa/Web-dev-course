const express = require('express');
const router = express.Router();



router.get('/' , (req, res) => {
    res.send('ALL SHELTERS');
})

router.post('/' , (req, res) => {
    res.send('Creating Shelters');
})


router.get('/:id' , (req, res) => {
    res.send('Viewing One SHELTERS');
})


router.get('/:id/edit' , (req, res) => {
    res.send('Editing one SHELTERS');
})

module.exports = router;