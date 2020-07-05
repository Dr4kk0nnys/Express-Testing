import express from 'express'
import path from 'path'
// import http from 'http'

const app = express()

// set static folder
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})