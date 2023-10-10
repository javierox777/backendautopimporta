const {Router} = require("express")
const router = Router()
const {signup, login, allSeller, updateUser, deleteUser} = require("../../controllers/user/controllers.user")
const {verify} = require("../../controllers/user/userInit")



router.post("/signup", signup)
router.post("/login", login)
router.get('/init', verify )
router.get('/allsellers', allSeller )
router.put('/updateseller/:id', updateUser )
router.delete('/deleteseller/:id', deleteUser )


module.exports = router