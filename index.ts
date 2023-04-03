import app from "./app"
import config from "./config"
const port = process.env.PORT || 3000

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.listen(port, () =>
  console.log(`🦧 Server ready at: http://localhost:${port}`),
)

