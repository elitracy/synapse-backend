import openai
import config
import sys
# Replace YOUR_API_KEY with your OpenAI API key
openai.api_key = config.CHAT_GPT_PERSONAL_KEY
#Our group key is out of funding or something, so I had to use my own.

userQuery1 = "bubble sort"
userQuery2 = "quick sort"

if(len(sys.argv)==3):
    userQuery1 = sys.argv[1]
    userQuery2 = sys.argv[2]
    

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    #model = "text-ada:001",
    messages=[
            {"role": "system", "content": "You are a teacher"},
            {"role": "user", "content": "What is the connection between %s and %s?" % (userQuery1, userQuery2)},
        ]
)

result = ''
for choice in response.choices:
    result += choice.message.content

print(result)