require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const port = process.env.PORT
const  token = process.env.TOKEN
const app = express()



app.use(express.json())
app.use(cors())

const bot = new Telegraf(token)

bot.start((ctx)=>ctx.reply('asd'))
bot.on(message('text'),(ctx)=>{
    ctx.reply('test')
    console.log(ctx.message);
    
})

bot.launch()