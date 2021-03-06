'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express = require('express')
// create an app
const app = express()

app.get('/', (req, res) => { res.send('Hello World') })
const PORT = process.env.PORT || 3000
app.listen(PORT, () => { console.log(`Server is running in http://localhost:${PORT}`) })
// # sourceMappingURL=server.js.map
