const express = require('express')
const apiRoute = require('./routes/apiRoute')
const htmlRoute = require('./routes/htmlRoute')

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', htmlRoute)



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

