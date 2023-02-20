// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema.js';

const { User } = initSchema(schema);



export {
  User
};

import express from "express"
const app = express()

import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import config from "../../src/aws-exports.js";

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

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})
