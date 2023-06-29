const router = require('express').Router();

const { getAll, getOneUser, putOneUser, register,deleteUser, login, logout } = require("./controller")


const  { hashPassword, isAdmin, authorization } = require('../../config/auth')

router.get('/', authorization, isAdmin, getAll)
router.get("/logout", authorization, logout)
router.get('/:id', authorization, isAdmin, getOneUser )
router.post('/register', hashPassword, register)
router.post("/login", login)
router.put('/:id', authorization, hashPassword, putOneUser)
router.delete('/:id', authorization, isAdmin, deleteUser)

module.exports = router;
