import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()

import users from "./api/users"
import notes from "./api/notes"
import tags from "./api/tags"

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use("/api/users", users)
app.use("/api/notes", notes)
app.use("/api/tags", tags)

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

export default app
