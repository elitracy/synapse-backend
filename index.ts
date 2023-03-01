import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

import users from "./api/users"
import notes from "./api/notes"

app.use(express.json())
app.use(express.static('public'))

app.use("/api/users", users)
app.use("/api/notes", notes)

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.listen(port, () =>
  console.log(`🦧 Server ready at: http://localhost:${port}`),
)

module.exports = app
