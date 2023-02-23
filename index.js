import express from 'express'
import dotenv from 'dotenv'
import GlobalRoute from './middleware/routes/GlobalRoute.js'

dotenv.config()

const app=express()
app.set('view engine','ejs')
app.set('views','./public/views')
app.use(express.static('public'))
GlobalRoute(app)

app.listen(process.env.PORTSITE)
