const Router = require("express")
const controller = require("./authController")
const router = new Router()
const { check } = require('express-validator')

router.post('/reg',
[
    check('username', 'Имя пользователя не должно быть пустым').notEmpty(),
    check('password', 'Пароль должен быть длинее 6 символов').isLength({min:6})
], controller.reg)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router