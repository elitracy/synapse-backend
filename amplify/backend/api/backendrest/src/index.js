import express from "express"
import bodyParser from "body-parser";
const port = process.env.PORT || 3000;

import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../../../../../src/models/index.js';
import config from "../../../../../src/aws-exports.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all methods
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

Amplify.configure({
  ...config,
});

app.get("/", (_, res) => {
  res.send("Hello World!")
})

app.get("/users", async (_, res) => {
  const models = await DataStore.query(User);
  res.send(models);
})

app.post("/users", async (req, res) => {
  const { name, email } = req.query

  await DataStore.save(
    new User({
      "Name": name,
      "Email": email
    })
  ).then(() => {
    res.send("User added!")
  }).catch((err) => {
    res.send(err)
  })
})

app.listen(port, () => {
  console.log("Server is running on port " + port)
})

