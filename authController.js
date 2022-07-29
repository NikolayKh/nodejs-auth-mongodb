const Role = require("./models/Role")
const User = require("./models/User")
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

class AuthController{
    async reg(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Ошибка при регистрации", errors})
            }
            if(!errors.isLength()){
                return res.status(400).json({message:"Ошибка при регистрации", errors})
            }
            const { username, password } = req.body
            const candidate = await User.findOne({ username }) // попытались найти пользователя с этим username
            if (candidate) { 
                return res.status(400).json({ message: "Пользователь с таким именем уже существует" }) // усли такой пользователь есть выводим сообщение
            }
            const hashPass = bcrypt.hashSync(password, 6); // хэшируем пароль с помощью bcrypt
            const userRole = await Role.findOne({value:"USER"}) // достаем роль из БД
            const user = new User({username, password:hashPass, roles: [userRole.value]}) // создаем пользователя присваиваем роль
            await user.save() // сохраняем в БД 
            return res.json({message: "Пользователь успешно зареган"}) // выводим сообщение
        } catch (error) {
            console.log(error)
            res.status(400).json({message:"Registration error"})
        }
    }

    async login(req,res){
        try {
            
        } catch (error) {
            console.log(error)
            res.status(400).json({message:"login error"})
        }
    }

    async getUsers(req,res){
        try {
           
            res.json("sdsdsd sadsd")
        } catch (error) {
            console.log(error)
            res.status(400).json({message:"get Users error"})
        }
    }

}

module.exports = new AuthController()