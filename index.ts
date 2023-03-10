import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

import users from "./api/users"
import notes from "./api/notes"
import groups from "./api/groups"
import outlines from "./api/outlines"

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use("/api/users", users)
app.use("/api/notes", notes)
app.use("/api/groups", groups)
app.use("/api/outlines", outlines)

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.listen(port, () =>
  console.log(`🦧 Server ready at: http://localhost:${port}`),
)

export default app
