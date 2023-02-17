const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('snapDatabase!'))

// ABILITIES //
router.delete('/abilities/:id', controllers.deleteAbility)
router.get('/abilities', controllers.getAllAbilities)
router.get('/abilities/:id', controllers.getAbilitiesById)
router.put('/abilities/:id', controllers.editAbility)
router.put('/abilities/:id', controllers.updateAbility)
router.post('/abilities/:id', controllers.createAbility)
router.delete('/abilities/:id', controllers.deleteAbility)
// router.post('/abilities/:id',controllers.createAbility)
// router.put('/abilities', controllers.createAbility)
// router.post('/abilities', controllers.createAbility)

// CARDS //
router.get('/cards', controllers.getAllCards)
router.get('/cards/:id', controllers.getCardById)
router.delete('/cards/:id', controllers.deleteCard)
// router.post('/cards/:id', controllers.updateCard)

module.exports = router
