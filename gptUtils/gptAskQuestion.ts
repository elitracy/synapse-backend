import { Configuration, OpenAIApi } from "openai"
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function askQuestion(question: String) {
  const completion = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Can you explain ${question}\n Keep the response to one paragraph.` }]
    },
  );
  return completion.data
}

export default askQuestion

// (async () => {
//   const history = [];
//
//   while (true) {
//     const user_input1 = "what is a linked list?";
//
//     const messages = [];
//     for (const [input_text, completion_text] of history) {
//       messages.push({ role: "user", content: input_text });
//       messages.push({ role: "assistant", content: completion_text });
//     }
//     var requestString = new String("Can you explain ")
//     var fs = requestString.concat(user_input1, ". Keep the response to two paragraphs.")
//     messages.push({ role: "user", content: fs });
//
//     try {
//       const completion = openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: messages[],
//       });
//
//       const completion_text = await completion.data.choices[0].message.content;
//       console.log(completion_text);
//
//       history.push([user_input1, completion_text]);
//
//       const user_input_again = readlineSync.question(
//         "\nWould you like to continue the conversation? (Y/N)"
//       );
//       if (user_input_again.toUpperCase() === "N") {
//         return;
//       } else if (user_input_again.toUpperCase() !== "Y") {
//         console.log("Invalid input. Please enter 'Y' or 'N'.");
//         return;
//       }
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//       } else {
//         console.log(error.message);
//       }
//     }
//   }
// })();
