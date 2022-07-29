const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./authRouter")



const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

async function start(){
    try {
        await mongoose.connect('mongodb+srv://root:db654321@cluster0.pwyka.mongodb.net/mongo-learn?retryWrites=true&w=majority')
        app.listen(PORT, ()=> console.log(`Порт работает на ${PORT} порту`))
    } catch (error) {
        console.log("Errrrrr", error);
    }
} 

start()