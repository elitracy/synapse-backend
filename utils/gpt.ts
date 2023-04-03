import { Configuration, OpenAIApi } from "openai"
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function askQuestion(question: String) {
  const completion = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Can you explain ${question}\n Keep the response to one paragraph.` }]
    },
  );
  return completion.data
}

export async function linkNodes(node1: String, node2: String) {
  const completion = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Tell me the relation between ${node1} and ${node2}.\n Keep the response to one paragraph and start it with yes or no.` }]
    },
  );
  return completion.data
}
