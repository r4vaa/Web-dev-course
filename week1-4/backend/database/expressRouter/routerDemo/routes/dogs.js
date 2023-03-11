const expres = require('express');
const router = expres.Router();


router.get('/', (req, res ) => {
    res.send('ALL DOGS')
})

router.get('/:id', (req, res ) => {
    res.send('Viewing One DOg');
})

router.get('/:id/edit' , (req, res ) => {
    res.send('EDITING one DOG');
})

module.exports = router;