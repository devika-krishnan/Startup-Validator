const express = require('express')
const router = require('./routes/analyze')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/analyze',router)

app.listen(3000,()=>{
    console.log('Listening at 3000')
})

